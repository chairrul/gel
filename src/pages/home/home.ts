import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TigaPage } from '../tiga/tiga';
import { EmpatPage } from '../empat/empat';

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
    loadThird() {
      this.navCtrl.push(TigaPage,{
      })
    }
    loadFourth() {
      this.navCtrl.push(EmpatPage,{
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
