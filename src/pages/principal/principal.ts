import { Component } from '@angular/core';
import { NavController, LoadingController, ModalController } from 'ionic-angular';
import { NotaPage } from '../nota/nota';
import { HomePage } from './../home/home';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
    this.inicia();
  }

  inicia():void{
    const loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 800
    });
    loader.present();
  }
  onConfirma():void{
    this.navCtrl.push(HomePage);
   }
  }

