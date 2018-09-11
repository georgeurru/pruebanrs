import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';


import { RestProvider } from '../../providers/rest/rest';
import { ConstantsProvider } from '../../providers/constants/constants';
import { UtilsProvider } from '../../providers/utils/utils';


import { PeoplePage } from '../people/people';

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

  response: any = {};
  films: any[] = [];
  responseFilms: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestProvider,
    public utils: UtilsProvider, public constants: ConstantsProvider,
    public modal: ModalController) {
  }


  ionViewDidLoad() {
    this.getFilms();
  }


  getFilms() {
    let loading = this.utils.load(this.constants.MENSAJE_ESPERA);

    loading.present();
    this.films = [];

    this.rest.getFilms()
      .then(data => {
        this.response = data;
        this.responseFilms = this.response.results;


        this.responseFilms.forEach(obj => {
          let film: any = {
            "title": obj.title,
            "episode_id": obj.episode_id,
            "opening_crawl": obj.opening_crawl,
            "director": obj.director,
            "producer": obj.producer,
            "release_date": obj.release_date,
            "characters": []
          };


          let listaActores: any[] = [];
          obj.characters.forEach(urlActor => {
            let actor: any = {};
            this.rest.getPeople(urlActor)
              .then(dataActor => {
                this.response = dataActor;
                actor = this.response;
                listaActores.push(actor);
              })
              .catch(error => {
                alert(JSON.stringify(error));
                loading.dismiss();
              });
          });

          film.characters = listaActores;

          this.films.push(film);

        });
        loading.dismiss();
      })
      .catch(error => {
        alert(JSON.stringify(error));
        loading.dismiss();
      });
  }


  actorSelected(actor) {    
    let modal = this.modal.create(PeoplePage, { actor: actor });
    modal.present();
  }

}
