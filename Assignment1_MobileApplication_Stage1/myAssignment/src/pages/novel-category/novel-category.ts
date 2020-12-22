import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ViewNovelPage } from '../view-novel/view-novel';
import { NovelPreviewPage } from '../novel-preview/novel-preview';

import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-novel-category',
  templateUrl: 'novel-category.html',
})
export class NovelCategoryPage {
  // navPram variable
  categoryName = this.navParams.get('categoryName'); // current tapped categoryName
  // Change the format so it can be displayed on the screen: fantasy ---> Fantasy
  firstLetter = this.categoryName.charAt(0).toUpperCase();
  restLetter = this.categoryName.slice(1);
  title = this.firstLetter + this.restLetter;

  // Storage vairable
  novelsST: any; // novels storage
  loggedInUser: any;
  users: any;

  currentCategory = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage, private statusBar: StatusBar) {
    this.statusBar.styleDefault();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad NovelCategoryPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter(){
    this.storage.get("novels").then(val => {
      this.novelsST = val;
      // Change the name to match with the key of novelsST data.
      if (this.categoryName == "sci-fi"){ // ---> sci-fi
        this.categoryName = "scifi"; // ---> scifi
      }
      // use this.categoryName as key to retrieve perticular data
      this.currentCategory = this.novelsST[this.categoryName];
    });

    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
    });

    this.storage.get("users").then(val=>{
      this.users = val;
    });
    
  }

  // Navigate to view novel page
  navToReadNovel() {
    this.navCtrl.push(ViewNovelPage);
  }

  // Show novel review page
  novelPrev(index){
    let novelPrevModal = this.modalCtrl.create(NovelPreviewPage, {novelPrev: this.currentCategory[index]});
    novelPrevModal.present({animate: false});
  }

  // Add to user collection
  addToCollection(index){
    this.currentCategory[index].collections = true; // new value
    this.currentCategory[index].likes += 1; // new value
    this.loggedInUser[3].collections.push(this.currentCategory[index]);
    this.updateStorage();
  }

  // Remove from collection if tapped
  removeCollection(index){
    this.currentCategory[index].collections = false; // new value
    this.currentCategory[index].likes -= 1; // new value
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

}
