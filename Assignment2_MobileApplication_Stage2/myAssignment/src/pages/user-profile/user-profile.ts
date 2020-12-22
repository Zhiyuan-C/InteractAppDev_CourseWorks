import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController, Content } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
  // Storage variables
  loggedInUser: any;
  users: any;
  userCheck: any;
  nickName = "";
  userAvatar = "";
  userGender = "";
  userFavNum: number;

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage, private statusBar:StatusBar) {
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }
  
  // Get data from storage and assigning to storage variables
  ionViewDidEnter(){
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
      this.userCheck = this.loggedInUser[0].loggedIn;
      this.nickName = this.loggedInUser[1].nickName;
      this.userAvatar = this.loggedInUser[1].avatar;
      this.userGender = this.loggedInUser[1].gender;
      this.userFavNum = this.loggedInUser[1].favouriateNum;
    });
    this.storage.get("users").then(val=>{
      this.users = val;
    });
  }

}
