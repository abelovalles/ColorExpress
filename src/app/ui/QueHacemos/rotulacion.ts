/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-rotulacion',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class RotulacionUiComponent {
  servicios = [
    {
      name: 'Rotulación de Vehículos',
    },
    {
      name: 'Rotulación de PVC',
    },
    {
      name: 'Rotulación de Foamboard',
    },
    {
      name: 'Rotulación de Vidrios con Esmerilado',
    }
  ];

  imagen = '/app/images/quehacemos/rotulacion.png';
  imagen2 = '/app/images/quehacemos/rotulacion367x249.png';
  titulo = 'Servicios de Rotulacion';
  cotizacion= '/services/rotulacion/cotizacion';

}

