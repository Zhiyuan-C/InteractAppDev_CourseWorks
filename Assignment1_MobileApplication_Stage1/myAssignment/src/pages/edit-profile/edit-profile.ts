import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})

export class EditProfilePage {
  // Storage vairables
  loggedInUser: any;
  users: any;
  // Storage vairable, for store, display and update
  newAvatar: string;
  newNick = "";
  newDoB = "";
  newContry = "";
  newFavNum: number;
  newGender = "";
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private statusBar:StatusBar, public toastCtrl: ToastController) {
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }
  // get storage data and assigning to variables
  ionViewDidEnter(){
    this.storage.get("loggedInUser").then(val=>{
      this.loggedInUser = val;
      let userInfo = this.loggedInUser[1];
      this.newAvatar = userInfo.avatar;
      this.newNick = userInfo.nickName;
      this.newDoB = userInfo.DoB;
      this.newContry = userInfo.country;
      this.newFavNum = userInfo.favouriateNum;
      this.newGender = userInfo.gender;
    });
    this.storage.get("users").then(val => {
      this.users = val;
    });
  }

  // Upload image and display on the screen
  imageSelected(files) {
    let fileReader = new FileReader();
    fileReader.onload = e => {
      this.newAvatar = fileReader.result;
    };
    fileReader.readAsDataURL(files[0]);
  }

  // Update storage
  update(){
    let userInfo = this.loggedInUser[1];
    userInfo.avatar = this.newAvatar;
    userInfo.nickName = this.newNick;
    userInfo.DoB = this.newDoB;
    userInfo.country = this.newContry;
    userInfo.favouriateNum = this.newFavNum;
    userInfo.gender = this.newGender;
    this.storage.set("loggedInUser", this.loggedInUser);
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
      message: 'Your profile is updated',
      position: 'top',
      duration: 1500
    }); // create toast end
    toast.present();
  }
}
