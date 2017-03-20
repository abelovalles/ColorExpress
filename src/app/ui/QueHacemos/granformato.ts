/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-granformato',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class GranformatoUiComponent {
  servicios = [
    {
      name: 'Banners',
    },
    {
      name: 'Viniles para stickers',
    },
    {
      name: 'Viniles para paredes',
    },
    {
      name: 'Viniles microperforados',
    },
    {
      name: 'Viniles para autos',
    },
    {
      name: 'Vinil recortado',
    },
    {
      name: 'Papel fotográfiico',
    },
    {
      name: 'Duratrans o materiales para cajas de luz',
    }
  ];

  imagen = '/app/images/quehacemos/granformato.png';
  imagen2 = '/app/images/quehacemos/granformato367x249.png';
  titulo = 'Servicios de Gran Formato';
cotizacion= '/services/granformato/cotizacion';
}

