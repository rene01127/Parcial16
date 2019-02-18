import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavsProvider {
  favoritos = [];
  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavsProvider Provider');
  }
  addFavoritos(producto){
    this.favoritos.push(producto);

    const toast = this.toastCtrl.create({
      message: 'Agregado a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  
  getFavoritos(){
    return this.favoritos;
  }

}
