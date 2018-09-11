import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


/**
 * Definición de Paginas
 */
import { FilmsPage } from '../../pages/films/films';
import { StarshipsPage } from '../../pages/starships/starships';
import { VehiclesPage } from '../../pages/vehicles/vehicles';


/*
* Definición de Providers
*/

import {ConstantsProvider} from '../../providers/constants/constants';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public constants : ConstantsProvider) {

  }


  goFilms(){
    this.navCtrl.push(FilmsPage);
  }

  goStarships(){
    this.navCtrl.push(StarshipsPage);
  }

  goVehicles(){
    this.navCtrl.push(VehiclesPage);
  }

}
