import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';

@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class RegistPage {
  // set up variables to retrive data
  newUser = false;
  userST: any; // store information from storage "users"
  usersPD = this.usersP.users; // store information from users provider
  userReg = this.usersP.userReg;
  email = "";
  password = "";
  Uid = "";
  nickName = "";
  DoB = "";
  gender = "";
  country = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public viewCtrl: ViewController, public usersP: UsersProvider, public storage: Storage, private statusBar:StatusBar) {
    this.statusBar.styleDefault();
    this.ionViewDidEnter();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistPage');
  }

  // get storage data and assigning to variables
  ionViewDidEnter() {
    this.storage.get("users").then(val => {
      this.userST = val;
    });
  }

  // regist user
  regist() {
    console.log("-----------Begin test!!!------------")
    // check must requre filed is not empty 
    if (this.email != "" && this.password != "" && this.nickName != ""){
      // check if the email address already exsist
      for (let key in this.userST){
        let emailST = this.userST[key][0].email;
        console.log(emailST);
        if (this.email != emailST) {
          this.newUser = true;
          console.log(this.newUser);  
        } else {
          this.newUser = false;
          console.log(this.newUser);
          break
        } // else seatement end     
      } // for loop end
      if (this.newUser) {
        // create variable to += 1 to the UID
        // let UidNum = parseInt(this.Uid);// convert string to number
        // UidNum += 1;
        // let UidStr = UidNum.toString();// conver number to string
        console.log("done!")
        let UidNum = Math.floor((10001 * Math.random()) + 1);
        this.userReg[1]["Uid"] = UidNum.toString();
        this.userReg[0]["email"] = this.email;
        this.userReg[0]["password"] = this.password;
        this.userReg[1]["nickName"] = this.nickName;
        this.userReg[1]["DoB"] = this.DoB;
        this.userReg[1]["gender"] = this.gender;
        this.userReg[1]["country"] = this.country;
        let UidStr = this.userReg[1]["Uid"];

        // Assigning the new obj to the usersP, update with usersP 
        this.usersPD[UidStr] = this.userReg;
        console.log(this.usersPD);
        this.storage.set("users", this.usersPD);

        // Return to the login page
        const toast = this.toastCtrl.create({
          message: 'New account has been created',
          position: 'top',
          duration: 1500
        });

        // after duration, go back to previous page
        toast.onDidDismiss(() => {
          this.navCtrl.pop();
        });
        //present toast
        toast.present();    
        } else {
          const toast = this.toastCtrl.create({
            message: 'This email address already exist, please login or use other email to regist',
            position: 'top',
            duration: 1500
          }); // create toast end
          toast.present();        
        } // else statement end
    } else {
      const toast = this.toastCtrl.create({
        message: 'Please enter the required information',
        position: 'top',
        duration: 1500
      }); // create toast end
      toast.present();
    } // else statement end
  } // regist end

}
