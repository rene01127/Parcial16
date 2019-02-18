import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { InformacionPage } from '../informacion/informacion';
import { BuscarPage } from '../buscar/buscar';

/**
 * Generated class for the EmpleosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleos',
  templateUrl: 'empleos.html',
})
export class EmpleosPage {
  empleos = [];
  info = InformacionPage;
  buscar = BuscarPage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.empleos = data['list_ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleosPage');
  }

  Info(e){
    this.navCtrl.push(this.info, {producto: e});
  }

  Buscar(){
    this.navCtrl.push(this.buscar, {producto: this.empleos});
  }

}