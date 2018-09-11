import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {RestProvider} from '../../providers/rest/rest';
import {ConstantsProvider} from '../../providers/constants/constants';
import {UtilsProvider} from '../../providers/utils/utils';


/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {


  response : any = {};
  vehicles: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider,
              public utils: UtilsProvider,public constants : ConstantsProvider) {
  }

  ionViewDidLoad() {
    this.getVehicles();
  }

  getVehicles(){
    let loading = this.utils.load(this.constants.MENSAJE_ESPERA);

    loading.present();

    this.rest.getVehicles()
      .then(data => {
        this.response = data;
        this.vehicles = this.response.results;
        loading.dismiss();
      })
      .catch(error => {
        alert(JSON.stringify(error));
        loading.dismiss();
      });
  }

}
