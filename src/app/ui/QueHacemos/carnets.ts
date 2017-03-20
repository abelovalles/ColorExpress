/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-carnets',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class CarnetsUiComponent {
  servicios = [
    {
      name: 'Carnets',
    }
  ];

  imagen = '/app/images/quehacemos/carnets.png';
  imagen2 = '/app/images/quehacemos/carnets367x249.png';
  titulo = 'Servicios de Carnets';
  cotizacion= '/services/carnets/cotizacion';

}

