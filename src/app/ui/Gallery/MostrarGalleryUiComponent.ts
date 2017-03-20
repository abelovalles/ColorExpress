/**
 * Created by AbelRicardo on 3/3/2017.
 */
import {Component } from '@angular/core';

@Component({
  selector: 'app-mostrargallery',
  template: `
    <app-gallery [datasource]=slides></app-gallery>
  `,
})
export class MostrarGalleryUiComponent {
  images;
  slides: Array<Object>;

  constructor() {
    this.images = [
      {'url' : '/app/images/portafolio/img1.jpg',
      'Titulo': 'Titulo de la imagen',
      'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'}
    ];

    this.slides = [
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'},
      {'url' : '/app/images/portafolio/img1.jpg',
        'Titulo': 'Titulo de la imagen',
        'Empresa': 'Empresa a la que se le instalo'}
    ]
    ;
  }
}
