/**
 * Created by AbelRicardo on 3/9/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { ObInfoRestService } from './ObInfoRestService';
import 'emailjs/email';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-cotizacioncart',
  templateUrl: 'cotCarnets.html',
  styleUrls: ['cotEstilos.css'],
  providers: [ ObInfoRestService ]
})

export class CotizarCartComponent {
// creamos un nuevo objeto de form y seteamos su tipo como complexform
  complexForm: FormGroup;
  private tipoDeTrabajo: any;
  private materialDe= [ 'Sin Impresion', 'Con Impresion' ];
  private porta= ['Si', 'No'];
  private imp = 'Carnet';
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
      'tipoTrabajo': 'Carnets',
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

  iniciarmaterial(material: String) {
    this.complexForm.controls['collar'].setValue(material);
    console.log(' Entro al metodo ' + material);
  }
  iniciarporta(portaC: String) {
    this.complexForm.controls['portaCarnet'].setValue(portaC);
    console.log(' Entro al metodo ' + portaC);

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
    this.router.navigate(['/services/carnets']);
  }

}
