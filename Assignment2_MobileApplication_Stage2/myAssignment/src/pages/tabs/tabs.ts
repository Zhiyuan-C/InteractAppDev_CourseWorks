import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CollectionPage } from '../collection/collection';
import { MyPage } from '../my/my';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CollectionPage;
  tab3Root = MyPage;


  constructor() {
    
  }

}