import { ModuleWithProviders }  from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {QuienesSomosUiComponent} from '../QuienesSomos/QuienesSomos';
import {QueHacemosUiComponent} from '../QueHacemos/QueHacemos';
import { TrabajosComponent } from '../Trabajos/Trabajos';
import { ClientesComponent } from '../Clientes/Clientes';
import { ContactanosComponent } from '../Contactanos/Contactanos';
import { ImprentaUiComponent } from '../QueHacemos/imprenta';
import { DisenoeditorialUiComponent } from '../QueHacemos/disenoeditorial';
import { GranformatoUiComponent } from '../QueHacemos/granformato';
import { CarnetsUiComponent } from '../QueHacemos/carnets';
import { DecoracionUiComponent } from '../QueHacemos/decoracion';
import { PopUiComponent } from '../QueHacemos/pop';
import { RotulacionUiComponent } from '../QueHacemos/rotulacion';
import { SenalizacionUiComponent } from '../QueHacemos/senalizacion';
import { MostrarGalleryUiComponent } from '../Gallery/MostrarGalleryUiComponent';
import { CotizarDecComponent } from '../Cotizacion/cotDecoracion';
import { CotizarImpComponent } from '../Cotizacion/cotImprenta';
import { CotizarCartComponent } from '../Cotizacion/cotCarnets';
import { CotizarDEditComponent } from '../Cotizacion/cotDisenoEditorial';
import { CotizarGForComponent } from '../Cotizacion/cotGranFormato';
import { CotizarPopComponent } from '../Cotizacion/cotPop';
import { CotizarRotComponent } from '../Cotizacion/cotRotulacion';
import { CotizarSenComponent } from '../Cotizacion/cotSenalizacion';
/**
 * Created by AbelRicardo on 1/31/2017.
 */

export const routerConfig: Routes = [

  {
    path: 'home',
    component: QuienesSomosUiComponent,
    data: {
      breadcrumb: 'home'
    }
  },
  {
    path: 'services',
    component: QueHacemosUiComponent,
    data: {
      breadcrumb: 'Servicios'
    }
  },
  {
    path: 'services/imprenta/cotizacion',
    component: CotizarImpComponent
  }
  ,
  {
    path: 'services/disenoeditorial/cotizacion',
    component: CotizarDEditComponent
  }
  ,
  {
    path: 'services/decoracion/cotizacion',
    component: CotizarDecComponent
  }
  ,
  {
    path: 'services/pop/cotizacion',
    component: CotizarPopComponent
  }
  ,
  {
    path: 'services/senalizacion/cotizacion',
    component: CotizarSenComponent
  }
  ,
  {
    path: 'services/rotulacion/cotizacion',
    component: CotizarRotComponent
  }
  ,
  {
    path: 'services/carnets/cotizacion',
    component: CotizarCartComponent
  }
  ,
  {
    path: 'services/granformato/cotizacion',
    component: CotizarGForComponent
  },
  {
    path: 'ourjobs',
    component: MostrarGalleryUiComponent
  },
  {
    path: 'ourclients',
    component: ClientesComponent
  },
  {
    path: 'contact',
    component: ContactanosComponent
  },
  {
    path: 'services/imprenta',
    component: ImprentaUiComponent
  },
  {
    path: 'services/disenoeditorial',
    component: DisenoeditorialUiComponent
  },
  {
    path: 'services/granformato',
    component: GranformatoUiComponent
  }
  ,
  {
    path: 'services/decoracion',
    component: DecoracionUiComponent
  }
  ,
  {
    path: 'services/pop',
    component: PopUiComponent
  }
  ,
  {
    path: 'services/rotulacion',
    component: RotulacionUiComponent
  }
  ,
  {
    path: 'services/senalizacion',
    component: SenalizacionUiComponent
  },

  {
    path: 'services/carnets',
    component: CarnetsUiComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routerConfig);


