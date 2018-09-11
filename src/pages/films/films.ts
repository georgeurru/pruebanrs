import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import {RestProvider} from '../../providers/rest/rest';
import {ConstantsProvider} from '../../providers/constants/constants';
import {UtilsProvider} from '../../providers/utils/utils';

/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  response : any = {};
  films: any[] = [];
  responseFilms: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public rest: RestProvider,
              public utils: UtilsProvider,public constants : ConstantsProvider) {
  }


  ionViewDidLoad() {
    this.getFilms();
  }


  getFilms(){
    let loading = this.utils.load(this.constants.MENSAJE_ESPERA);

    loading.present();

    this.rest.getFilms()
      .then(data => {
        this.response = data;
        this.responseFilms = this.response.results;

        this.responseFilms.forEach(obj => {
          obj.characters.forEach(urlActor => {
            
          });
        });
        loading.dismiss();
      })
      .catch(error => {
        alert(JSON.stringify(error));
        loading.dismiss();
      });
  }


  actorSelected(actor){
    alert(JSON.stringify(actor));
  }

}
