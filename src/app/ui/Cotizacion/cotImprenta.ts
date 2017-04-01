/**
 * Created by AbelRicardo on 3/9/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { ObInfoRestService } from './ObInfoRestService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cotizacionimp',
  templateUrl: 'cotImprenta.html',
  styleUrls: ['cotEstilos.css'],
  providers: [ ObInfoRestService ]
})

export class CotizarImpComponent {
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

  imp = ['Diseño Grafico', 'Tarjetas de Presentacion', 'Volantes', 'Folders', 'Stikers', 'Brochures', 'Papeleria en General',
    'Tarjetas para Cumpleaños,Bodas y Eventos', 'Facturas / Cotizacion / Recibos', 'Boletos para Eventos', 'Calendarios'];
  allmaterialspapel = ['Satinado 80lb' , 'Satinado 100lb' , 'Bond' , 'Quimico' ,
    'Mate 80lb' , 'Mate 100lb' , 'Auto Adesivo Brillante' , 'Auto Adesivo Mate'];

  allmaterialscartulina = ['Satinado 80lb' , 'Satinado 100lb' , 'Satinado 130lb' , 'Mate 80lb' , 'Mate 100lb' ,
    'Mate 130lb' , 'Vellum' , 'Hilo' , 'Espejo' , 'Sulfito 12'];
  colores = ['1' , '2' , '3' , 'FullColor'];

// pasamos una instancia del FormBuilder a nuestro constructor
  constructor(fb: FormBuilder, private _httpservices: ObInfoRestService, private router: Router) {
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
    this.tipoMedida = this.complexForm.controls['umedida'].valueChanges
      .startWith(null)
      .map(dato => this.filterMedida(dato));
    this.tipoColoresAnver = this.complexForm.controls['colorAnverso'].valueChanges
      .startWith(null)
      .map(dato => this.filterColores(dato));
    this.tipoColoresRever = this.complexForm.controls['colorReverso'].valueChanges
      .startWith(null)
      .map(dato => this.filterColores(dato));

  }

  iniciarmaterial(material: String) {
    this.complexForm.controls['tipoMaterial'].setValue(material);
   /* console.log(' Entro al metodo ' + material);*/
    if (material === 'Papel') {
      this.tipoMaterial = this.complexForm.controls['material'].valueChanges
        .startWith(null)
        .map(dat => this.filterMaterialPapel(dat));
    } else if (material === 'Cartulina') {
      this.tipoMaterial = this.complexForm.controls['material'].valueChanges
        .startWith(null)
        .map(dat => this.filterMaterialCartulina(dat));


    }
  }

  filterMaterialPapel(val: string) {
  return val ? this.allmaterialspapel.filter((s) => new RegExp(val, 'gi').test(s)) : this.allmaterialspapel;
}
  filterMaterialCartulina(val: string) {
  return val ? this.allmaterialscartulina.filter((s) => new RegExp(val, 'gi').test(s)) : this.allmaterialscartulina;
}
  filterColores(val: string) {
    return val ? this.colores.filter((s) => new RegExp(val, 'gi').test(s)) : this.colores;
  }
  filterTrabajo(val: string) {
    return val ? this.imp.filter((s) => new RegExp(val, 'gi').test(s)) : this.imp;
  }
  filterMedida(val: string) {
    return val ? this.umed.filter((s) => new RegExp(val, 'gi').test(s)) : this.umed;
  }

  enviarcorreo() {
    this._httpservices.postJSON(this.complexForm).subscribe(
      data => this.postData = JSON.stringify(data),
      error =>  alert('No se pudo enviar la solicitud , intentalo mas tarde o comunicate a ventas1@colorexpress.com.pa'),
      () => console.log('Finished')
    );
  }
  // implementamos nuestra funcion de submit que se encargara de mostras los valores del form en un log
  submitForm(value: any): void {
    /*console.log('Reactive FormData');
     console.log(value);*/
    this.enviarcorreo();
    this.router.navigate(['/services/imprenta']);
  }

}
