import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ElectronicosPage } from '../electronicos/electronicos';
import { EmpleosPage } from '../empleos/empleos';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1 = HomePage;
  tab2 = ElectronicosPage;
  tab3 = EmpleosPage;
  tab4 = FavoritosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
