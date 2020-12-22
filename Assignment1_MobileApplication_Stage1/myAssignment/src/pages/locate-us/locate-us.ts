import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

declare var google;

@Component({
  selector: 'page-locate-us',
  templateUrl: 'locate-us.html',
})
export class LocateUsPage {
  // map variables
  @ViewChild('map') mapElement;
  map: any;
  pos: any;
  lat: any;
  lng: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar) {
    this.statusBar.styleDefault();
    // if navigator is on get the current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }; // this.pos end
        console.log(this.pos);
        this.lat = this.pos.lat;
        this.lng = this.pos.lng;
        // this.map.setCenter(this.pos);
        let latLong = new google.maps.LatLng(this.pos.lat, this.pos.lng);
        let mapOptions = {
          center: latLong,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }; // map Options end

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: this.map.getCenter()
        }); // marker end

        let infoWindow = new google.maps.InfoWindow({
          content: '<h4>Current location</h4>'
        });
        google.maps.event.addListener(marker, 'click', ()=>{
          infoWindow.open(this.map, marker);
        }); // addListener end

    })} else {
          alert("geolocation not avaliable!");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocateUsPage');
  }
  ionViewDidEnter() {
    
    
    
  }
}
