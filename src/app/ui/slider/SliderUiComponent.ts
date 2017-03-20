/**
 * Created by AbelRicardo on 1/26/2017.
 */
import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: 'SliderUiComponent.html',
  styleUrls: ['SliderUiComponent.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
  // styleUrls: ['SliderUiComponent.css']
})

export class AppSliderUiComponent {
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;

  }
}




