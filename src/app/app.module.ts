import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MapaPage } from '../pages/mapa/mapa';
import { RecientePage } from '../pages/reciente/reciente';
import { BuscarPage } from '../pages/buscar/buscar';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../config/firebase.config';

import { AgmCoreModule } from '@agm/core';

import { Geolocation } from '@ionic-native/geolocation';

import { HttpClientModule } from '@angular/common/http';
import { UbicacionServiceProvider } from '../providers/ubicacion-service/ubicacion-service'; 
@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    RecientePage,
    BuscarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6uuLYlh1lS4bEHWT-ChT4OQ8j_IJiRdU'
    }),
	HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    RecientePage,
    BuscarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    UbicacionProvider,
    UbicacionServiceProvider
  ]
})
export class AppModule {}
