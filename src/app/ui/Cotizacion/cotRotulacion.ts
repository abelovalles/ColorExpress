/**
 * Created by AbelRicardo on 3/9/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { ObInfoRestService } from './ObInfoRestService';

@Component({
  selector: 'app-cotizacionrot',
  templateUrl: 'cotRotulacion.html',
  styleUrls: ['cotEstilos.css'],
  providers: [ ObInfoRestService ]
})

export class CotizarRotComponent {
// creamos un nuevo objeto de form y seteamos su tipo como complexform
  complexForm: FormGroup;
  tipoDeTrabajo: any;
  tipoMedida: any;
  tipoMaterial: any;
  postData: String;


  umed= ['inch', 'cm', 'm', 'ft'];

  mat = ['Vinil de Corte', 'Vinil Generico', 'Vinil Intermedio'];

  rot= ['Rotulacion de Vehiculo', 'Rotulacion de PVC', 'Rotulacion de Foamboard', 'Rotulacion de Vidrio'];

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
    this.tipoMedida = this.complexForm.controls['umedida'].valueChanges
      .startWith(null)
      .map(dato => this.filterMedida(dato));
    this.tipoMaterial = this.complexForm.controls['material'].valueChanges
      .startWith(null)
      .map(dat => this.filterMaterial(dat));
  }

  filterTrabajo(val: string) {
    return val ? this.rot.filter((s) => new RegExp(val, 'gi').test(s)) : this.rot;
  }
  filterMedida(val: string) {
    return val ? this.umed.filter((s) => new RegExp(val, 'gi').test(s)) : this.umed;
  }
  filterMaterial(val: string) {
    return val ? this.mat.filter((s) => new RegExp(val, 'gi').test(s)) : this.mat;
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
