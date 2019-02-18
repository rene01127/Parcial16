import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
import { FavsProvider } from '../../providers/favs/favs';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  favoritos = [];
  info = InformacionPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavsProvider) {
    this.favoritos = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  Info(f){
    this.navCtrl.push(this.info, {producto: f});
  }

}
