/**
 * Created by AbelRicardo on 3/2/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-imprenta',
  templateUrl: 'detalleservicio.html',
  styleUrls: ['individual.css']
})

export class ImprentaUiComponent {

  servicios = [
    {
      name: 'Diseño Grafico',
    },
    {
      name: 'Tarjetas de Presentacion',
    },
    {
      name: 'Volantes',
    },
    {
      name: 'Folders',
    },
    {
      name: 'Stikers',
    },
    {
      name: 'Brochures',
    },
    {
      name: 'Papeleria en General',
    },
    {
      name: 'Tarjetas para Cumpleaños,Bodas y Eventos',
    },
    {
      name: 'Facturas / Cotizacion / Recibos',
    },
    {
      name: 'Boletos para Eventos',
    },
    {
      name: 'Calendarios',
    }
  ];

  imagen = '/app/images/quehacemos/imprenta.png';
  imagen2 = '/app/images/quehacemos/imprenta367x249.png';
  titulo = 'Servicios de Imprenta';
  cotizacion= '/services/imprenta/cotizacion';
}
