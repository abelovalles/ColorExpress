import { Component } from '@angular/core';
 // Insertamos el componente de las plantillas el selector es como se va a llamar la etiqueta en el html
@Component({
  selector: 'app-main-container',
  templateUrl: 'MainContainerComponent.html',
  styleUrls: ['MainContainerComponent.css']
})

 // Clase que exporta y no hace nada
export class AppMainContainerComponent {
  title = 'app works!';
}
