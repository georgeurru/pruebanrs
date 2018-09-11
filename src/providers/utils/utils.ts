
import { Injectable } from '@angular/core';
import { AlertController, ToastController,LoadingController } from 'ionic-angular';

/*
  Generated class for the UtilsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilsProvider {

  constructor(public alertCtrl: AlertController,public toastCtrl: ToastController,
    public loading:LoadingController) {
    
  }


  presentAlert(titulo,mensaje) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensaje,
      buttons: ['Aceptar']
    });
    alert.present();
  }

  presentToast(mensaje) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  configToast(mensaje,position,clase) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: position,
      cssClass: clase
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  load(mensaje){
    let loading = this.loading.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <div class="custom-spinner-box">` + mensaje + `</div>
        </div>`
    });

    return loading;
  }

}
