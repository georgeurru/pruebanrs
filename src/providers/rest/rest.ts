import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import {ConstantsProvider} from '../constants/constants';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http,public constants: ConstantsProvider) {
    
  }


  getVehicles(){
    var url = this.constants.URL;

    return new Promise(
      resolve =>{
        this.http.get(url + "vehicles/")
        .map(res=>res.json())
        .subscribe(
          data =>{
            resolve(data);
          },err=>{
            console.log(err);
          }
        )
      }
    );
  }

  getStarships(){
    var url = this.constants.URL;

    return new Promise(
      resolve =>{
        this.http.get(url + "starships/")
        .map(res=>res.json())
        .subscribe(
          data =>{
            resolve(data);
          },err=>{
            console.log(err);
          }
        )
      }
    );
  }

  getFilms(){
    var url = this.constants.URL;

    return new Promise(
      resolve =>{
        this.http.get(url + "films/")
        .map(res=>res.json())
        .subscribe(
          data =>{
            resolve(data);
          },err=>{
            console.log(err);
          }
        )
      }
    );
  }

  getPeople(url){
    
    return new Promise(
      resolve =>{
        this.http.get(url)
        .map(res=>res.json())
        .subscribe(
          data =>{
            resolve(data);
          },err=>{
            console.log(err);
          }
        )
      }
    );

  }

}
