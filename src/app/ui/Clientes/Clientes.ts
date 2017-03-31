/**
 * Created by AbelRicardo on 2/23/2017.
 */
import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: 'Clientes.html',
  styleUrls: ['Clientes.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class ClientesComponent {
  slides: Array<Object>;
  constructor(config: NgbCarouselConfig) {

    // customize default values of carousels used by this component tree
    config.interval = 0;
    config.wrap = true;
    config.keyboard = true;
    this.slides = [
      {'url' : '/app/images/clientes/sanpablocolor.png'},
      {'url' : '/app/images/clientes/plusexpress.png'},
      {'url' : '/app/images/clientes/zoombalive.png'},
      {'url' : '/app/images/clientes/naturalia.png'},
      {'url' : '/app/images/clientes/maximaseguros.png'},
      {'url' : '/app/images/clientes/gastrolab.png'},
      {'url' : '/app/images/clientes/ciajema.png'},
      {'url' : '/app/images/clientes/allcargo.png'}

    ];
  }
}
