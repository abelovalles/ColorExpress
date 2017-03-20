/**
 * Created by AbelRicardo on 3/3/2017.
 */
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: 'Gallery.html',
  styleUrls: ['Gallery.css']
})

export class GalleryComponent {

  @Input() datasource;
  selectedImage;

  setSelectedImage( image  ) {
    this.selectedImage = image;
  }



}
