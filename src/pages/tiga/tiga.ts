import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tiga',
  templateUrl: 'tiga.html',
})
export class TigaPage {

  constructor(public navCtrl: NavController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TigaPage');
  }
}
