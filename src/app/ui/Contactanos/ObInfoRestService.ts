/**
 * Created by AbelRicardo on 3/3/2017.
 */
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class ObInfoRestService {
  constructor (private _http: Http) {
  }

  getCurrentTime( ) {
        return this._http.get('http://services.groupkt.com/country/get/all').map(res => res.json());
  }

  postJSON(form: FormGroup) {
    let json = JSON.stringify({cliente: form.controls['cliente'].value, contacto: form.controls['contacto'].value,
      telefono: form.controls['telefono'].value, celular: form.controls['celular'].value,
      email: form.controls['email'].value, tipoTrabajo: form.controls['tipoTrabajo'].value,
      cantidad: form.controls['cantidad'].value, ancho: form.controls['ancho'].value,
      alto: form.controls['alto'].value, umedida: form.controls['umedida'].value,
      tipoMaterial: form.controls['tipoMaterial'].value, material: form.controls['material'].value,
      colorAnverso: form.controls['colorAnverso'].value, colorReverso: form.controls['colorReverso'].value,
      collar: form.controls['collar'].value, portaCarnet: form.controls['portaCarnet'].value,
      detalle: form.controls['detalle'].value});
    console.log(json);
    let headers = new Headers({ 'Content-Type': 'application/json,charset=UTF-8' });
    headers.append('Access-Control-Allow-Origin', '*');
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8080/emailsender/correo', json, headers).map(res => res.json());
  }
}
