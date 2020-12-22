import { Injectable } from '@angular/core';
// import { NavController, ViewController, ToastController } from 'ionic-angular';

@Injectable()
export class UsersProvider {

  constructor() {
    
  }

  // constructor( public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController ) {
    
  // }
    // original count = 00000
  // new user regist, count + 1
  users = {
    "00000":[
      {email: "t@t.com", password: "0.123456", loggedIn: false},
      {Uid: "00000", nickName: "Myu", avatar: "../../assets/imgs/defaultUserAvatar.jpeg", DoB: "1980-02-01", gender: "Female", country: "", favouriateNum: 6},
      {drafts: [
        {
          draftId: 1025,
          title:"Draft1",
          content: "sdjalsdajhwqbdlsadasdjabdjwljabsdsadjaljdhqwjn"
        }
      ]},
      {collections: []},
      {bookmarks:[]}
    ], 
    "00001":[
      {email: "dummy2@email.com", password: "012#!%211", loggedIn: false},
      {Uid: "00001", nickName: "NJ", avatar: "../../assets/imgs/defaultUserAvatar.jpeg", DoB: "1990-01-23", gender: "Male", country: "", favouriateNum: 6},
      {drafts: []},
      {collections: []},
      {bookmarks:[]}
    ]
  }; // end of users

  // Initial value when there is no user logged in
  loggedInUser = [
    {email: "", password: "", loggedIn: false},
    {Uid: "", nickName: "", avatar: "../../assets/imgs/defaultUserAvatar.jpeg", DoB: "", gender: "", country: ""},
    {drafts: []},
    {collections: []},
    {bookmarks:[]}
  ];

  // Initial value for regest new user
  userReg = [
    {email: "", password: "", loggedIn: false},
    {Uid: "10000", nickName: "", avatar: "../../assets/imgs/defaultUserAvatar.jpeg", DoB: "", gender: "", country: "", favouriateNum: 0},
    {drafts: []},
    {collections: []},
    {bookmarks:[]}
  ];
  // start from 10000 instead of 00000, avoid error with initial values


}
