import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController } from 'ionic-angular';

import { RegistPage } from '../regist/regist';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email = "";
  password = "";
  // storage variables
  userST: any;
  loggedinUser: any;

  correct = false; // check if login info are correct

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private toastCtrl: ToastController, public usersP: UsersProvider, public storage: Storage, private statusBar:StatusBar) {
    this.ionViewDidEnter();
    this.statusBar.styleDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // get storage data
  ionViewDidEnter() {
    this.storage.get("users").then(val => {
      this.userST = val;
    });
  }

  //close login modal
  closeModal() {
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.popToRoot();
  }

  //open regist page
  goRegist() {
    this.navCtrl.push(RegistPage);
  }
  // log user in
  login(){
    for (let user in this.userST){
      let userCheck = this.userST[user][0];
      // if email and password are correct, change the loggedIn status to true, update both users and loggedInUser status
      if (userCheck.email == this.email && userCheck.password == this.password){
        this.correct = true;
        userCheck.loggedIn = true;
        const toast = this.toastCtrl.create({
          message: 'You are succssfully logged in',
          position: 'top',
          duration: 1500
        }); // create toast end
        // after duration, dismiss modal, reload app
        toast.onDidDismiss(() => {
          this.navCtrl.setRoot(TabsPage);
          this.navCtrl.popToRoot();
          // this.viewCtrl.dismiss();
        }); // on dissmiss end
        //present toast
        toast.present();

        if (userCheck.loggedIn == true){
          this.loggedinUser = this.userST[user];
          this.storage.set("loggedInUser", this.loggedinUser);
          this.storage.set("users", this.userST);
        }
        break;
      } 

    } // for end
    // if email and password are not correct, show toast
    if (! this.correct){
      console.log("not correct!");
      const toast = this.toastCtrl.create({
        message: 'Wrong email address or password, pelase try again',
        position: 'bottom',
        duration: 3000
      });

      //present toast
      toast.present();
    }
  } // end of login function

}
