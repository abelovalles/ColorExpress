/**
 * Created by AbelRicardo on 3/3/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ObInfoRestService {
  constructor (private _http: Http) {
  }

  getCurrentTime( ) {
        return this._http.get('http://services.groupkt.com/country/get/all').map(res => res.json());
  }

  postJSON() {
    let json = JSON.stringify({var1: 'test', var2: 3});
    let params = 'json=' + json;
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post('http://validate.jsontest.com', params , {
      headers: headers
    }).map(res => res.json());
  }
}
