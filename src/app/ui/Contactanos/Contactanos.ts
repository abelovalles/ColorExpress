/**
 * Created by AbelRicardo on 2/24/2017.
 */
import { Component } from '@angular/core';
// importamos varios apis especificos para lidear con los reactives forms
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ObInfoRestService } from './ObInfoRestService';

@Component({
  selector: 'app-contactanos',
  templateUrl: 'Contactanos.html',
  styleUrls: ['Contactanos.css'],
  providers: [ ObInfoRestService ]
})

export class ContactanosComponent {
// creamos un nuevo objeto de form y seteamos su tipo como complexform
  complexForm: FormGroup;
  private postData: String;

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
  }
  enviarcorreo() {
    this._httpservices.postJSON(this.complexForm).subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert('No se pudo enviar la solicitud , intentalo mas tarde o comunicate a ventas1@colorexpress.com.pa'),
      () => console.log('Finished')
    );
  }

    // implementamos nuestra funcion de submit que se encargara de mostras los valores del form en un log
  submitForm(value: any): void {
    console.log(value);
    this.enviarcorreo();
    this.router.navigate(['/ourjobs']);
  }
}
