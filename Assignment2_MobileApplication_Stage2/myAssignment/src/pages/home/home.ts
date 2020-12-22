import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { NovelCategoryPage } from '../novel-category/novel-category';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';
import { UserProfilePage } from '../user-profile/user-profile';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories: string[] = [
    "Fantasy",
    "Sci-fi",
    "Detective",
    "Romance",
    "Poetry"
  ];
  title = "";

  // storage variables
  users: any;
  loggedInUser: any;
  userCheck: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public storage: Storage, public navParams:NavParams, private statusBar:StatusBar) {
    console.log(this.navCtrl.getViews());
    this.statusBar.styleDefault();
  }

  // get storage data and assigning to variables
  ionViewDidEnter() {
    this.storage.get("users").then(val => {
      this.users = val;
    });
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
      this.userCheck = this.loggedInUser[0].loggedIn;
    })
  }
  
  // navigate to categroy page
  novelCate(index){
    // If user is not logged in, open login page, otherwise navigate to the navelcategory page
    if (this.userCheck == false) {
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.present();
    } else {
      this.navCtrl.push(NovelCategoryPage, {
        categoryName: this.categories[index].toLowerCase()
      });
    }
  }
  
  // If user is not logged in, open login page, ptherwise open user profile page
  loginRegist(){
    if (this.userCheck == false) {
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.present();
    } else {
      this.navCtrl.push(UserProfilePage);
    }
  }
}
