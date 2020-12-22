import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

// Providers
import { NovelsProvider } from '../providers/novels/novels';
import { UsersProvider } from '../providers/users/users';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private novelsP: NovelsProvider, private usersP: UsersProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.show();
      // set up initial novels storage
      this.storage.get("novels").then((val)=>{
        if (val == null) {
          // Set values to the storage (Always remeber to set after defined)
          this.storage.set("novels", this.novelsP.novels);
        } 
      });// novle storage end

      // set up initial users storage
      this.storage.get("users").then((val)=>{
        if (val == null) {
          this.storage.set("users", this.usersP.users);
        }
      });// user storage end

      // set up initial loggedInUser storage
      this.storage.get("loggedInUser").then((val)=>{
        if (val == null) {
          this.storage.set("loggedInUser", this.usersP.loggedInUser);
        }
      });// loggedInUser storage end

      // set up initial loggedInUser storage
      this.storage.get("userReg").then((val)=>{
        if (val == null) {
          this.storage.set("userReg", this.usersP.userReg);
        }
      });// loggedInUser storage end
    });
  }


}

