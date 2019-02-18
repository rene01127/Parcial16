import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';
import { BuscarPage } from '../buscar/buscar';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ElectronicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-electronicos',
  templateUrl: 'electronicos.html',
})
export class ElectronicosPage {
  Elec = [];
  info = InformacionPage;
  buscar = BuscarPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.Elec = data['list_ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectronicosPage');
  }
  Info(e){
    this.navCtrl.push(this.info ,{producto: e});
  }

  Buscar(){
    this.navCtrl.push(this.buscar, {producto: this.Elec});
  }

}
