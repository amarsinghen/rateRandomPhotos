import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-photos',
  templateUrl: 'display-photos.html',
 // styleUrls:['display-photos.scss']
})
export class DisplayPhotosPage {

  photoList: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.photoList=[
      {
          image: 'assets/imgs/image1.jpg'
      },{
          image: 'assets/imgs/image2.jpg'
      },{
          image: 'assets/imgs/image3.jpg'
        },{
          image: 'assets/imgs/image4.jpg'
        },{
          image: 'assets/imgs/image5.jpg'
        },{
          image: 'assets/imgs/image6.jpg'
        },{
          image: 'assets/imgs/image7.jpg'
      }
    ];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPhotosPage');
  }

}
