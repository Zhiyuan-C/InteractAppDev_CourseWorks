import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { ViewNovelPage } from '../view-novel/view-novel';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-novel-preview',
  templateUrl: 'novel-preview.html',
})
export class NovelPreviewPage {
  // Storage variable
  loggedInUser: any;
  users: any;
  novelsST: any;

  // navParam variable
  novelPrev : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage, private statusBar: StatusBar) {
    this.statusBar.styleDefault();
    this.novelPrev = navParams.get("novelPrev");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovelPreviewPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter() {
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
    }); // get end
    this.storage.get("users").then(val => {
      this.users = val;
    })
    this.storage.get("novels").then(val => {
      this.novelsST = val;
    })
  }
  
  // Add novel to collection
  addToCollection(){
    this.novelPrev.collections = true;
    this.novelPrev.likes += 1;

    // let the type of the novel be the key to identify the current novel in novels storage, and assigning with the new value
    let key = this.novelPrev.type.toLowerCase();
    let newNovels = [];
    if (key == "sci-fi"){ // ---> sci-fi
      key = "scifi"; // ---> scifi
    }
    this.novelsST[key].forEach(novel => {
      if (this.novelPrev.novelID == novel.novelID){
        newNovels.push(this.novelPrev);
      } else {
        newNovels.push(novel);
      }
    });
    this.novelsST[key] = newNovels;
    this.loggedInUser[3].collections.push(this.novelPrev);
    this.updateStorage();
  }

  // Remove novel from collection
  removeCollection(){
    this.novelPrev.collections = false;
    this.novelPrev.likes -= 1;

    // let the type of the novel be the key to identify the current novel in novels storage, and assigning with the new value
    let key = this.novelPrev.type.toLowerCase();
    let newNovels = [];
    if (key == "sci-fi"){ // ---> sci-fi
      key = "scifi"; // ---> scifi
    }
    this.novelsST[key].forEach(novel => {
      if (this.novelPrev.novelID == novel.novelID){
        newNovels.push(this.novelPrev);
      } else {
        newNovels.push(novel);
      }
    });
    this.novelsST[key] = newNovels;

    // check the novel current index, to delet with correct index
    let novelIndex = this.loggedInUser[3].collections.findIndex(data => data.novelID == this.novelPrev.novelID);
    console.log("novelIndex--->", novelIndex);
    this.loggedInUser[3].collections.splice(novelIndex, 1);
    this.updateStorage();
  }

  // Update storage
  updateStorage(){
    this.users[this.loggedInUser[1].Uid] = this.loggedInUser;
    this.storage.set("novels", this.novelsST);
    this.storage.set("loggedInUser", this.loggedInUser);
    this.storage.set("users", this.users);
  }

  // Close preview
  close(){
    this.navCtrl.pop({animate: false});
  }

  // Navigate to view novel
  navToReadNovel(){
    this.navCtrl.push(ViewNovelPage, {content: this.novelPrev});
  }

  
}
