import { Component, OnInit } from '@angular/core';
import { Geolocation,Geoposition} from '@ionic-native/geolocation/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.page.html',
  styleUrls: ['./geolocalizacion.page.scss'],
})
export class GeolocalizacionPage  {
  
  lat:number
  lon:number

  
  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

 
}

ngAfterViewInit(){
  this.getGeolocation();
}
getGeolocation(){
  this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
    this.lat = geoposition.coords.latitude;
      this.lon = geoposition.coords.longitude;
  });
}

}