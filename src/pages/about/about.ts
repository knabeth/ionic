import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  timer: any;
  pushPage: ContactPage;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
    console.log(localStorage)
    document.querySelector('.aboutTitle div').innerHTML = localStorage.getItem( 'curentuser');
    var seconde = 0;
    var minute = 0;
    var heure = 0;
     this.timer = setInterval(function () {
        document.querySelector('.secondeShow').innerHTML = seconde.toString();
        seconde ++;


      if(seconde >= 60){
        seconde = 0;
        minute++;
        document.querySelector('.minuteShow').innerHTML = minute.toString();
      }
      else if (minute >= 60){
        minute = 0;
        heure ++;
        document.querySelector('.heureShow').innerHTML = heure.toString();

      }

    },1000);
    var date = new Date();
    var dateSecond = date.getSeconds().toString();
    var dateHours = date.getHours().toString();
    var dateMinute = date.getMinutes().toString();
    var dateDay = date.getUTCDate().toString();
    var dateMonth= date.getMonth() ;
    var dateMonth = dateMonth+1;
    document.querySelector('.startHour').innerHTML = dateDay +'/'+dateMonth+' Ā:'+ dateHours+':'+dateMinute+':'+dateSecond;

  }
  validateTrip(){
    if (confirm("Voulez-vous terminer la session ?")) {

      clearInterval(this.timer);
      this.navCtrl.push(ContactPage);


    }
  }
}
