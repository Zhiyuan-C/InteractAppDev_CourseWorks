import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ViewDraftPage } from '../view-draft/view-draft';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-drafts',
  templateUrl: 'drafts.html',
})
export class DraftsPage {
  // Storage vairables
  loggedInUser: any;
  users: any;

  // new empty draft list append data from loggedInUser to, display with new draft list
  drafts = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, private statusBar:StatusBar) {
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DraftsPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter() {
    this.storage.get("loggedInUser").then(val => {
      this.loggedInUser = val;
      this.drafts = val[2].drafts;
      console.log(this.drafts);
    });
    this.storage.get("users").then(val => {
      this.users = val;
    })
  }

  // parse the value to prev and edit novel
  navToViewDraft(index) {
    let viewDraftModal = this.modalCtrl.create(ViewDraftPage, {draft: this.drafts[index]});
    viewDraftModal.present();
  }
  
  // function to delete the slide delete novel
  delete(index){
    if (confirm("Delete " + this.drafts[index].title + "?")){
      this.drafts.splice(index, 1);
      this.storage.set("loggedInUser", this.loggedInUser);
      console.log(this.loggedInUser);
      // update users storage, compare the Uid, then update with loggedInUser
      let LoggedUid = this.loggedInUser[1].Uid;
      for (let key in this.users){
        if(key == LoggedUid){
          this.users[key] = this.loggedInUser;
          console.log(this.users);
          this.storage.set("users", this.users);
          break;
        } 
      }//for end
    }// if end
  }


}
