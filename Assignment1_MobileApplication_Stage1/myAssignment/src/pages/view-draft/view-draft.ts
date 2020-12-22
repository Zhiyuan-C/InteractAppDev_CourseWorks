import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

import { NewOReditDraftPage } from '../new-o-redit-draft/new-o-redit-draft';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-view-draft',
  templateUrl: 'view-draft.html',
})
export class ViewDraftPage {
  // navParam variable
  draft:any;
  title = "";
  content = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private statusBar: StatusBar) {
    this.statusBar.styleLightContent();
    // retrieve data from drafts page, new variable to store the data, and display them
    this.draft = navParams.get("draft")
    console.log(this.draft);
    this.title = this.draft.title;
    this.content = this.draft.content;
    console.log(this.title);
    console.log(this.content);
    console.log(this.draft.title);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewDraftPage');
  }
  // edit function, and parse the value to edit draft page to edit
  navToEdit() {
    let editModal = this.modalCtrl.create(NewOReditDraftPage,{draft: this.draft});
    editModal.onDidDismiss(val => {
      this.draft = val.draft;
      this.title = this.draft.title;
      this.content = this.draft.content;
      console.log(val);
    })
    editModal.present();
  }

  // Go back to previous page
  dismissM(){
    this.viewCtrl.dismiss();
  }
  

}
