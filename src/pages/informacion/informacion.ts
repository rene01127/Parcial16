import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavsProvider } from '../../providers/favs/favs';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {
  producto = {};
  imgs = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavsProvider) {
    this.producto = this.navParams.get('producto');
    if(this.producto.ad.hasOwnProperty('images')){
      this.imgs = this.producto.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }
  addFavoritos(producto){
    this.fav.addFavoritos(producto);
  }
}
