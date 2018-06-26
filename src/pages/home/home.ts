import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from './../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 public onAcessar():void{
    console.log('Aqui');
    this.navCtrl.push(PrincipalPage);
  }

}
