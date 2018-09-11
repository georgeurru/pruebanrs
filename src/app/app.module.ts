import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Push } from '@ionic-native/push';

import { MyApp } from './app.component';

/**
 * Definición de Paginas
 */
import { FilmsPage } from '../pages/films/films';
import { HomePage } from '../pages/home/home';
import { PeoplePage } from '../pages/people/people';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';


/*
* Definición de Providers
*/ 
import { RestProvider } from '../providers/rest/rest';
import { ConstantsProvider } from '../providers/constants/constants';
import { UtilsProvider } from '../providers/utils/utils';


@NgModule({
  declarations: [
    MyApp,
    FilmsPage,
    HomePage,
    PeoplePage,
    StarshipsPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FilmsPage,
    HomePage,
    PeoplePage,
    StarshipsPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    ConstantsProvider,
    UtilsProvider
  ]
})
export class AppModule {}
