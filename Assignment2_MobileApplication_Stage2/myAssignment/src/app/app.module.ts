import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';

// Providers
import { NovelsProvider } from '../providers/novels/novels';
import { UsersProvider } from '../providers/users/users';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

// Main pages
import { HomePage } from '../pages/home/home';
import { CollectionPage } from '../pages/collection/collection';
import { MyPage } from '../pages/my/my';

// Home page
import { LoginPage } from '../pages/login/login';
import { RegistPage } from '../pages/regist/regist';

// Novel page
import { NovelCategoryPage } from '../pages/novel-category/novel-category';
import { NovelPreviewPage } from '../pages/novel-preview/novel-preview';
import { ViewNovelPage } from '../pages/view-novel/view-novel';

// My page
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { DraftsPage } from '../pages/drafts/drafts';
import { NewOReditDraftPage } from '../pages/new-o-redit-draft/new-o-redit-draft';
import { ViewDraftPage } from '../pages/view-draft/view-draft';
import { LocateUsPage } from '../pages/locate-us/locate-us';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    CollectionPage,
    MyPage,
    NovelCategoryPage,
    NovelPreviewPage,
    ViewNovelPage,
    LoginPage,
    RegistPage,
    LocateUsPage,
    EditProfilePage,
    UserProfilePage,
    DraftsPage,
    NewOReditDraftPage,
    ViewDraftPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    CollectionPage,
    MyPage,
    NovelCategoryPage,
    NovelPreviewPage,
    ViewNovelPage,
    LoginPage,
    RegistPage,
    LocateUsPage,
    EditProfilePage,
    UserProfilePage,
    DraftsPage,
    NewOReditDraftPage,
    ViewDraftPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NovelsProvider,
    UsersProvider
  ]
})
export class AppModule {}
