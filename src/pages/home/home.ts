import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { BuscarPage } from '../buscar/buscar';
import { InformacionPage } from '../informacion/informacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vj = [];
  info = InformacionPage;
  buscar = BuscarPage;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe(data => {
      if(data.hasOwnProperty('list_ads')){
        this.vj = data['list_ads'];
      }
    }, error =>{console.log(JSON.stringify(error))});
  }

  Info(v){
    this.navCtrl.push(this.info, {producto: v});
  }
  Buscar(){
    this.navCtrl.push(this.buscar, {producto: this.vj});
  }
}
