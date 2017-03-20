/**
 * Created by AbelRicardo on 1/26/2017.
 */
import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bar',
  templateUrl: 'NavBarUiComponent.html',
  styleUrls: ['NavBarUiComponent.css'],
  providers: [NgbDropdownConfig]
})

export class AppBarUiComponent {
   clicked( ) {
 // procedimiento para abrir el dropdown y cerrarlo
       let theDropDown = document.querySelector('#menubar');
       if (theDropDown.classList.contains('menuselect') === false) {
         theDropDown.classList.add('menuselect');
       }else {
         theDropDown.classList.remove('menuselect');
       }
  }
  clicked2( ) {
    // procedimiento para abrir el dropdown y cerrarlo
    let theDropDown = document.querySelector('#menubar');
    if (theDropDown.classList.contains('menuselect') === true) {
      theDropDown.classList.remove('menuselect');
    }
  }
}

