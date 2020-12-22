import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, ModalController } from 'ionic-angular';

import { LocateUsPage } from '../locate-us/locate-us';
import { CollectionPage } from '../collection/collection';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { UserProfilePage } from '../user-profile/user-profile';
import { DraftsPage } from '../drafts/drafts';
import { NewOReditDraftPage } from '../new-o-redit-draft/new-o-redit-draft';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  // storage variables
  loggedInUser: any;
  users: any;
  userCheck: any;

  nickName = "";
  userAvatar = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private toastCtrl: ToastController, private storage: Storage, public modalCtrl: ModalController, private statusBar: StatusBar) {
    this.ionViewDidEnter();
    this.statusBar.styleLightContent();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter(){
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
      this.userCheck = this.loggedInUser[0].loggedIn;
      this.nickName = this.loggedInUser[1].nickName;
      this.userAvatar = this.loggedInUser[1].avatar;
    });

    this.storage.get("users").then(val=>{
      this.users = val;
    });

    if (this.userCheck == false) { // If user is not logged in, then open login window
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.present();
    }
  }

  // navigate to profile page
  navToProfile() {
    this.navCtrl.push(UserProfilePage);
  }

  // Section 1 - profile setting
  navToEditProfile() {
    this.navCtrl.push(EditProfilePage);
  }

  // Section 2 - Viewing novels/drafts
  navToNewDraft() {
    this.navCtrl.push(NewOReditDraftPage);
  }
  navToDrafts() {
    this.navCtrl.push(DraftsPage);
  }

  // Section 3 - Others
  // go to collection page
  navToCollection() {
    this.navCtrl.push(CollectionPage);
  }
  // go to location page
  navToLocation() {
    this.navCtrl.push(LocateUsPage);
  }

  // let user logout, change loggedin status to false and update storage
  logout() {
    this.loggedInUser[0].loggedIn = false;
    this.storage.set('loggedInUser', this.loggedInUser);
    for (let user in this.users){
      let userCheck = this.users[user][0];
      if (userCheck.loggedIn == true){
        userCheck.loggedIn = false;
        this.storage.set('users', this.users);
      }
    }
    const toast = this.toastCtrl.create({
      message: 'You are succssfully logged out',
      position: 'top',
      duration: 1500
    });
    // after duration, reload app
    toast.onDidDismiss(() => {
      
      window.location.reload();
    });
    //present toast
    toast.present();
    
    
  }

}
