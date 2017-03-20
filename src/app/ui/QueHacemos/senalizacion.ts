/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-senalizacion',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class SenalizacionUiComponent {
  servicios = [
    {
      name: 'Proyectos Especiales',
    },
    {
      name: 'Letreros Viales',
    },
    {
      name: 'Señalización de Seguridad Industrial',
    },
    {
      name: 'Identificacion de Plantas Industriales',
    },
    {
      name: 'Identificacion de Locales Comerciales',
    },
    {
      name: 'Señalización de Tránsito',
    }
  ];

  imagen = '/app/images/quehacemos/senalizacion.png';
  imagen2 = '/app/images/quehacemos/senalizacion367x249.png';
  titulo = 'Servicios de Señalización';
  cotizacion= '/services/senalizacion/cotizacion';

}

