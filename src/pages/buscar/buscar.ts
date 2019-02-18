import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {
  info = InformacionPage;
  productos = [];
  elementos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.productos = this.navParams.get('producto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscarPage');
  }

  getItems(ev){
    console.log(ev.target.value);
    this.elementos = this.productos.filter(e => {
      return e.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  Info(p){
    this.navCtrl.push(this.info, {producto: p});
  }

}