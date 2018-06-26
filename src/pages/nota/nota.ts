import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html'
})
export class NotaPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
    this.inicia();
  }

  inicia():void{
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 800
    });
    loader.present();
  }
  }

