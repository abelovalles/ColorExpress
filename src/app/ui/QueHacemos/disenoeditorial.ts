/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-disenoeditorial',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class DisenoeditorialUiComponent {
  servicios = [
    {
      name: 'Revistas',
    },
    {
      name: 'Catálogos',
    },
    {
      name: 'Manuales',
    },
    {
      name: 'Diseños',
    },
    {
      name: 'Libros',
    },
    {
      name: 'Correción de Libros',
    },
    {
      name: 'Restauración de Libros',
    },
    {
      name: 'Empastados / Tesis',
    },
    {
      name: 'Photobook',
    }
  ];

  imagen = '/app/images/quehacemos/disenoeditorial.png';
  imagen2 = '/app/images/quehacemos/disenoeditorial367x249.png';
  titulo = 'Servicios de Diseño Editorial';

  cotizacion='/services/disenoeditorial/cotizacion';
}

