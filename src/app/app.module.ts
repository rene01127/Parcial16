import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavsProvider } from '../providers/favs/favs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { BuscarPage } from '../pages/buscar/buscar';
import { ElectronicosPage } from '../pages/electronicos/electronicos';
import { EmpleosPage } from '../pages/empleos/empleos';
import { TabsPage } from '../pages/tabs/tabs';
import { InformacionPage } from '../pages/informacion/informacion';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InformacionPage,
    TabsPage,
    ElectronicosPage,
    EmpleosPage,
    FavoritosPage,
    BuscarPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InformacionPage,
    TabsPage,
    ElectronicosPage,
    EmpleosPage,
    FavoritosPage,
    BuscarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavsProvider
  ]
})
export class AppModule {}
