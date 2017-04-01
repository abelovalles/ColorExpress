 // se crea los modulos para angular
 import 'hammerjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { MaterialRootModule } from '@angular/material';
 import { AgmCoreModule } from 'angular2-google-maps/core';
 // / Luego agrego el componenete que realizamos
import { AppMainContainerComponent } from './container/MainContainerComponent';
import { AppBarUiComponent } from  './ui/MenuBar/NavBarUiComponent';
import { AppSliderUiComponent } from './ui/slider/SliderUiComponent';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
 import { QueHacemosUiComponent } from './ui/QueHacemos/QueHacemos';
 import { QuienesSomosUiComponent } from './ui/QuienesSomos/QuienesSomos';
 import { routing } from './ui/MenuBar/NavBarUiComponentConfig';
 import { TrabajosComponent } from './ui/Trabajos/Trabajos';
 import { ClientesComponent } from './ui/Clientes/Clientes';
 import { ContactanosComponent } from './ui/Contactanos/Contactanos';
 import { ImprentaUiComponent } from './ui/QueHacemos/imprenta';
 import { DisenoeditorialUiComponent } from './ui/QueHacemos/disenoeditorial';
 import { GranformatoUiComponent } from './ui/QueHacemos/granformato';
 import { CarnetsUiComponent } from './ui/QueHacemos/carnets';
 import { DecoracionUiComponent } from './ui/QueHacemos/decoracion';
 import { PopUiComponent } from './ui/QueHacemos/pop';
 import { RotulacionUiComponent } from './ui/QueHacemos/rotulacion';
 import { SenalizacionUiComponent } from './ui/QueHacemos/senalizacion';
 import { FooterComponent } from './ui/Footer/Footer';
 import { GalleryComponent } from './ui/Gallery/GalleryUiComponent';
 import { MostrarGalleryUiComponent } from './ui/Gallery/MostrarGalleryUiComponent';
 import { CotizarDecComponent } from './ui/Cotizacion/cotDecoracion';
 import { CotizarImpComponent } from './ui/Cotizacion/cotImprenta';
 import { CotizarCartComponent } from './ui/Cotizacion/cotCarnets';
 import { CotizarDEditComponent } from './ui/Cotizacion/cotDisenoEditorial';
 import { CotizarGForComponent } from './ui/Cotizacion/cotGranFormato';
 import { CotizarPopComponent } from './ui/Cotizacion/cotPop';
 import { CotizarRotComponent } from './ui/Cotizacion/cotRotulacion';
 import { CotizarSenComponent } from './ui/Cotizacion/cotSenalizacion';
// Decorador de nivel de clase

@NgModule({
  // Se coloca los componentes que vamso a realizar en nuestro Ngmodule
  declarations: [
    AppMainContainerComponent,
    AppBarUiComponent,
    AppSliderUiComponent,
    QueHacemosUiComponent,
    QuienesSomosUiComponent,
    TrabajosComponent,
    ClientesComponent,
    ContactanosComponent,
    ImprentaUiComponent,
    DisenoeditorialUiComponent,
    GranformatoUiComponent,
    CarnetsUiComponent,
    DecoracionUiComponent,
    PopUiComponent,
    RotulacionUiComponent,
    SenalizacionUiComponent,
    FooterComponent,
    GalleryComponent,
    MostrarGalleryUiComponent,
    CotizarDecComponent,
    CotizarImpComponent,
    CotizarCartComponent,
    CotizarRotComponent,
    CotizarPopComponent,
    CotizarDEditComponent,
    CotizarGForComponent,
    CotizarSenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    JsonpModule,
    routing ,
    MaterialRootModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo6OBQZY3iKKPaTbhq-9sSfqqQVF1V8ws'
    })
  ],
  bootstrap: [ AppMainContainerComponent]
})

export class AppModule {   }

/*platformBrowserDynamic().bootstrapModule(AppModule);*/
