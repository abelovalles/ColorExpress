/**
 * Created by AbelRicardo on 3/3/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'Footer.html',
  styleUrls: ['Footer.css'],
})

export class FooterComponent {

  // initial center position for the map
  lat= 9.0008774;
  lng= -79.5343398;
  zoom = 16;


  markers = [{
      lat: 9.0008774,
      lng: -79.5343398,
      label: 'ColorExpress',
      draggable: true
    }];

}

