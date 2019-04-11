import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class UbicacionProvider {

ubicacion: AngularFirestoreDocument<any>;

  constructor( private geolocation: Geolocation,
               private dBCuaad: AngularFirestore) {

                this.ubicacion = dBCuaad.doc(`/ubicacion/ubi`)

  }



  iniciarGeoLocalizacion(){

    this.geolocation.getCurrentPosition().then((resp) => {
     //resp.coords.latitude
     //resp.coords.longitude

     this.ubicacion.update({
       lat: resp.coords.latitude,
       lng: resp.coords.longitude
     })

     let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
      //data.coords.latitude
      //data.coords.longitude
      this.ubicacion.update({
        lat: data.coords.latitude,
        lng: data.coords.longitude
      })
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}
