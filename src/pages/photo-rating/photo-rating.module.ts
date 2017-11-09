import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoRatingPage } from './photo-rating';

@NgModule({
  declarations: [
    PhotoRatingPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoRatingPage),
  ],
})
export class PhotoRatingPageModule {}
