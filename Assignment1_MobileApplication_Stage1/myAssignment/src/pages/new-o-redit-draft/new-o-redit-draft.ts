import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-new-o-redit-draft',
  templateUrl: 'new-o-redit-draft.html',
})
export class NewOReditDraftPage {
  // storage variables
  loggedInUser: any;
  users: any;
  loggedInUserDrafts = [];

  drafts = []; //empty list, for ngIf. if undifined display create, else display edit
  
  // create part
  newTitle = "";
  newContent = "";
  newDraft = {};
  
  obj = {};

  // Edit part
  draft: any; //object, retrieve data from view draft page
  editTitle = "";
  editContent = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController, public viewCtrl:ViewController, private statusBar:StatusBar) {
    this.statusBar.styleDefault();
    this.draft = navParams.get("draft");
    // if not create new draft, then parse value to edit
    if (this.draft != undefined) {
      this.drafts.push(this.draft);
      this.editTitle = this.draft.title;
      this.editContent = this.draft.content;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewOReditDraftPage');  
  }

  // get storage data and assigning to variables
  ionViewDidEnter(){
    this.storage.get("loggedInUser").then(val=>{
      this.loggedInUser = val;
      this.loggedInUserDrafts = this.loggedInUser[2].drafts;
    });

    this.storage.get("users").then(val => {
      this.users = val;
    });
  }

  // Create draft
  createNew() {
    // Must have title, check if the title is empty
    if (this.newTitle == "") {
      const toast = this.toastCtrl.create({
        message: 'Title cannot be empty!',
        position: 'top',
        duration: 2500
      });
      //present toast
      toast.present();  
    } else {
      // Create new draft id
      let newDraftId = Math.floor((100001 * Math.random()) + 1);
      // Retreive values from input filed
      this.newDraft["title"]= this.newTitle;
      this.newDraft["content"] = this.newContent;
      this.newDraft["draftId"] = newDraftId;
      console.log(this.newDraft);
      console.log(this.loggedInUserDrafts);
      
      // Save input filed value, update loggedInStorage storage
      this.loggedInUserDrafts.push(this.newDraft);
      this.storage.set("loggedInUser", this.loggedInUser);

      // update users storage, compare the Uid, then update with loggedInUser
      let LoggedUid = this.loggedInUser[1].Uid;
      for (let key in this.users){
        if(key == LoggedUid){
          this.users[key] = this.loggedInUser;
          this.storage.set("users", this.users);
          break;
        } 
      }//for end


      const toast = this.toastCtrl.create({
        message: 'Created!',
        position: 'top',
        duration: 1500
      });

      // after duration, go back to previous page
      toast.onDidDismiss(() => {
        this.navCtrl.pop();
      });
      //present toast
      toast.present();   
    }
  } // create draft end
  

  // Edit draft
  save() {
    if (this.editTitle == "") {
      const toast = this.toastCtrl.create({
        message: 'Title cannot be empty!',
        position: 'top',
        duration: 2500
      });
      //present toast
      toast.present();
    } else {
      // retreve value from input
      this.draft.title = this.editTitle;
      this.draft.content = this.editContent;

      // Compare the draft id, and update loggedInUser storage
      let currentDraftId = this.draft.draftId;
      this.loggedInUserDrafts.forEach((val, index)=>{
        if (val.draftId == currentDraftId){
          this.loggedInUserDrafts[index] = this.draft;
          this.storage.set("loggedInUser", this.loggedInUser);
        }
      }); //forEach end

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

      const toast = this.toastCtrl.create({
        message: 'Saved!',
        position: 'top',
        duration: 1500
      });
      // parse as navoptions so it can update the draft list view
      toast.onDidDismiss(() => {
        this.viewCtrl.dismiss({draft: this.draft});
      });
      //present toast
      toast.present();  
    } //else end
    
  } // save end
    


}
