import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // photoList: any[];
  index:number=0;
  max: number=0;
  constructor(public navCtrl: NavController) {

  }

  photoList:any[]=[
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

  //photoListItem:any[]=this.photoList[this.max];

   onClickingNext():void{
    this.max=this.max+1;
    this.index=this.index+1;
  }

}
