import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar'

@Component({
  selector: 'page-view-novel',
  templateUrl: 'view-novel.html',
})
export class ViewNovelPage {
  // navParam variable
  content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private statusBar: StatusBar ) {
    this.content = navParams.get("content");
    this.statusBar.styleLightContent();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewNovelPage');
  }

  
  
}
