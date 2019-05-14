import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';
import { UbicacionServiceProvider } from '../../providers/ubicacion-service/ubicacion-service'; 

@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {

  lat: number;
  lng: number;

  ubi:any = {};

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              public _ubicacionProv: UbicacionProvider,
			  public ubicacionService: UbicacionServiceProvider) {

                this._ubicacionProv.iniciarGeoLocalizacion();

                this._ubicacionProv.ubicacion.valueChanges()
                                   .subscribe( data =>{
                                     this.ubi = data;
                                   } )

  }

   detalleApp(){

  let alert = this.alertCtrl.create({

      title: 'UdeG CTA CUAAD',
      subTitle: 'CuaadApp',
      buttons:['Aceptar']

    });

   alert.present();

  }
  ionViewDidLoad(){
        this.ubicacionService.getRemoteData();
    }	

}
