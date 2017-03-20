/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-pop',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class PopUiComponent {
  servicios = [
    {
      name: 'Serigrafia',
    },
    {
      name: 'Tazas',
    },
    {
      name: 'Boligrafos',
    },
    {
      name: 'Sublimacion',
    },
    {
      name: 'Gorras',
    },
    {
      name: 'Envases',
    },
    {
      name: 'Bolsas',
    },
    {
      name: 'T-Shirts',
    },
    {
      name: 'Sweaters',
    },
    {
      name: 'Botones',
    },
    {
      name: 'Bordados',
    }
  ];

  imagen = '/app/images/quehacemos/pop.png';
  imagen2 = '/app/images/quehacemos/pop367x249.png';
  titulo = 'Servicios de Material P.O.P';
  cotizacion= '/services/pop/cotizacion';

}

