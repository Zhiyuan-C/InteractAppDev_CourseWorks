import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { NovelPreviewPage } from '../novel-preview/novel-preview';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  // Variables to storage data
  loggedInUser: any;
  userCheck: any;
  users: any;
  novelsST: any;
  
  collections = [];// set up variable to display


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage, private statusBar:StatusBar) {
    this.ionViewDidEnter();
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter() {
    console.log("in ionViewDidEnter")
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
      this.userCheck = this.loggedInUser[0].loggedIn;
      this.collections = this.loggedInUser[3].collections;
    }); // get end
    
    if (this.userCheck == false) { // If user is not logged in, then open login window
      let loginModal = this.modalCtrl.create(LoginPage);
      loginModal.present();
    }
    this.storage.get("users").then(val => {
      this.users = val;
    });
    this.storage.get("novels").then(val => {
      this.novelsST = val;
    });
  }

  // Remove from collection if tapped
  removeCollection(index){
    this.collections[index].collections = false;
    this.collections[index].likes -= 1;
    
    // Compare the value with novels data, indentify the current data, so it can be updated as well
    let key = this.collections[index].type.toLowerCase();
    let newNovels = [];
    if (key == "sci-fi"){ // ---> sci-fi
      key = "scifi"; // ---> scifi
    }
    this.novelsST[key].forEach(novel => {
      if (this.collections[index].novelID == novel.novelID){
        newNovels.push(this.collections[index]);
      } else {
        newNovels.push(novel);
      }
    });
    this.novelsST[key] = newNovels;

    // remove from the list
    this.loggedInUser[3].collections.splice(index, 1);
    this.updateStorage();
  }

  // Update storage
  updateStorage(){
    this.users[this.loggedInUser[1].Uid] = this.loggedInUser;
    this.storage.set("novels", this.novelsST);
    this.storage.set("loggedInUser", this.loggedInUser);
    this.storage.set("users", this.users);
  }

  // Show novel review page
  novelPrev(index){
    let novelPrevModal = this.modalCtrl.create(NovelPreviewPage,{novelPrev: this.collections[index]});
    novelPrevModal.present({animate: false});
  }
}