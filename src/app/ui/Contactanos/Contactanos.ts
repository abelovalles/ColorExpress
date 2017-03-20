/**
 * Created by AbelRicardo on 2/24/2017.
 */
import { Component } from '@angular/core';
// importamos varios apis especificos para lidear con los reactives forms
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: 'Contactanos.html',
  styleUrls: ['Contactanos.css']
})

export class ContactanosComponent {
// creamos un nuevo objeto de form y seteamos su tipo como complexform
  complexForm: FormGroup;

// pasamos una instancia del FormBuilder a nuestro constructor
  constructor(fb: FormBuilder) {
    // Aqui estamos utiulizando el FormBuilder para armar nuestro formularioi
    this.complexForm = fb.group({
      // pdemos setear valores por defecto pasandole los valores correspondientes
      'cliente': '',
      'contacto': '',
      'correo': '',
      'mensaje': ''
    });
  }
  // implementamos nuestra funcion de submit que se encargara de mostras los valores del form en un log
  submitForm(value: any): void {
    console.log('Reactive FormData');
    console.log(value);
  }
}
