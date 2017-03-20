/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-decoracion',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class DecoracionUiComponent {
  servicios = [
    {
      name: 'Stands de Exposiciones',
    },
    {
      name: 'Vidrieras Comerciales',
    },
    {
      name: 'Motivos Infantiles',
    },
    {
      name: 'Publicidad Interior de Locales Comerciales',
    }
  ];

  imagen = '/app/images/quehacemos/decoracion.png';
  imagen2 = '/app/images/quehacemos/decoracion367x249.png';
  titulo = 'Servicios de Decoracion';
  cotizacion= '/services/decoracion/cotizacion';

}

