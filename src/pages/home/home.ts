import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector('.tabbar');

  }

   loadFirst() {
    	this.navCtrl.push(AboutPage,{
    	})
    }

    loadSecond() {
      this.navCtrl.push(ContactPage,{
      })
    }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

}
