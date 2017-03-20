/**
 * Created by AbelRicardo on 3/9/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { ObInfoRestService } from './ObInfoRestService';

@Component({
  selector: 'app-cotizacionpop',
  templateUrl: 'cotPop.html',
  styleUrls: ['cotEstilos.css'],
  providers: [ ObInfoRestService ]
})

export class CotizarPopComponent {
// creamos un nuevo objeto de form y seteamos su tipo como complexform
  complexForm: FormGroup;
  tipoDeTrabajo: any;
  tipoMedida: any;
  tipoMaterial: any;
  tipoColoresAnver: any;
  tipoColoresRever: any;
  postData: String;

  materialDe= [ 'Papel', 'Cartulina' ];

  umed= ['inch', 'cm', 'm', 'ft'];

  pop = ['Serigrafia', 'Tazas', 'Boligrafos', 'Sublimacion', 'Gorras', 'Envases', 'Bolsas',
    'T-Shirts', 'Sweaters', 'Botones', 'Bordados'];
  allmaterialspapel = ['Satinado 80lb' , 'Satinado 100lb' , 'Bond' , 'Quimico' ,
    'Mate 80lb' , 'Mate 100lb' , 'Auto Adesivo Brillante' , 'Auto Adesivo Mate'];

  allmaterialscartulina = ['Satinado 80lb' , 'Satinado 100lb' , 'Satinado 130lb' , 'Mate 80lb' , 'Mate 100lb' ,
    'Mate 130lb' , 'Vellum' , 'Hilo' , 'Espejo' , 'Sulfito 12'];
  colores = ['1' , '2' , '3' , 'FullColor'];

// pasamos una instancia del FormBuilder a nuestro constructor
  constructor(fb: FormBuilder, private _httpservices: ObInfoRestService) {
    // Aqui estamos utiulizando el FormBuilder para armar nuestro formularioi
    this.complexForm = fb.group({
      // pdemos setear valores por defecto pasandole los valores correspondientes
      'cliente': '',
      'contacto': '',
      'telefono': '',
      'email': '',
      'celular': '',
      'tipoTrabajo': '',
      'cantidad': '',
      'ancho': '',
      'alto': '',
      'umedida': '',
      'tipoMaterial': '',
      'material': '',
      'colorAnverso':  '',
      'colorReverso': '',
      'collar': '',
      'portaCarnet': '',
      'detalle': ''
    });

    this.tipoDeTrabajo = this.complexForm.controls['tipoTrabajo'].valueChanges
      .startWith(null)
      .map(name => this.filterTrabajo(name));

  }


  filterTrabajo(val: string) {
    return val ? this.pop.filter((s) => new RegExp(val, 'gi').test(s)) : this.pop;
  }

  enviarcorreo() {
    this._httpservices.postJSON(this.complexForm).subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log('Finished')
    );
  }
  // implementamos nuestra funcion de submit que se encargara de mostras los valores del form en un log
  submitForm(value: any): void {
    /*console.log('Reactive FormData');
     console.log(value);*/
    this.enviarcorreo();
  }

}
