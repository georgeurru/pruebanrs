import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { ConstantsProvider } from '../../providers/constants/constants';
/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {


  actor: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public constants: ConstantsProvider) {
    this.actor = navParams.get("actor");
  }

  ionViewDidLoad() {
    
  }



}
