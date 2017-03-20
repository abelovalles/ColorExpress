/**
 * Created by AbelRicardo on 3/3/2017.
 */
import { Component } from '@angular/core';
import { ObInfoRestService } from './ObInfoRestService';

@Component({
  selector: 'app-obtenerrest',
  template: `
    <button (click)="onTestGet()"> Obtener Restful </button><br>
    <p> Output: {{getData}}</p><br>
    <p> Output Res: {{getDataRes}}</p><br>
    <button> Obtener Post </button><br>
    <p> Output: {{postData}}</p><br>
   `,
  providers: [ ObInfoRestService ]
})

export class RestfulUiComponent {
  getData: String;
  postData: String;
  getDataRes: any;

  constructor(private _httpservices: ObInfoRestService) {

  }

  onTestGet() {
  this._httpservices.getCurrentTime().subscribe(
   data => this.getData = JSON.stringify(data),
    error => alert(error),
    () => console.log('Finished')
  );

    /*this.getDataRes = this.getData.RestResponse;*/
  }
}
