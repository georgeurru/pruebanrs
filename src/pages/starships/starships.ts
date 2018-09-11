import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {RestProvider} from '../../providers/rest/rest';
import {ConstantsProvider} from '../../providers/constants/constants';
import {UtilsProvider} from '../../providers/utils/utils';

/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  response : any = {};
  starships: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider,
              public utils: UtilsProvider,public constants : ConstantsProvider) {
  }

  ionViewDidLoad() {
    this.getStarships();
  }

  getStarships(){
    let loading = this.utils.load(this.constants.MENSAJE_ESPERA);

    loading.present();

    this.rest.getStarships()
      .then(data => {
        this.response = data;
        this.starships = this.response.results;
        loading.dismiss();
      })
      .catch(error => {
        alert(JSON.stringify(error));
        loading.dismiss();
      });
  }

}
