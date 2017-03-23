import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  timer: any;
  pushPage: ContactPage;
  startHour :string;
  aboutTitle: string;
  constructor(public navCtrl: NavController, public platform : Platform) {

  }
  ionViewDidLoad(){

    /*
     document.querySelector('.aboutTitle div').innerHTML = localStorage.getItem( 'curentuser');
     */

    var seconde = 0;
    var minute = 0;
    var heure = 0;
     this.timer = setInterval(function () {
       if(seconde < 10){
         document.querySelector('.secondeShow').innerHTML = '0'+seconde.toString();

       }else{
         document.querySelector('.secondeShow').innerHTML = seconde.toString();
       }

        seconde ++;


      if(seconde >= 60){
        seconde = 0;
        minute++;
        if(minute < 10){


          document.querySelector('.minuteShow').innerHTML = '0'+minute.toString();

        }else{
          document.querySelector('.minuteShow').innerHTML = minute.toString();
        }

      }
      else if (minute >= 60){
        minute = 0;
        heure ++;
        if(heure < 10){

          document.querySelector('.heureShow').innerHTML = '0'+heure.toString();

        }else{
          document.querySelector('.heureShow').innerHTML = heure.toString();
        }
      }

    },1000);
    var date = new Date();
    var dateSecond = date.getSeconds().toString();
    var dateHours = date.getHours().toString();
    var dateMinute = date.getMinutes().toString();
    var dateDay = date.getUTCDate().toString();
    var dateMonth= date.getMonth() ;
    var dateYear= date.getFullYear() ;

    var month = "";
    switch(dateMonth)
    {
      case 0:
        month="Janvier";
        break;
      case 1:
        month="Février";
        break;
      case 2:
        month="Mars";
        break;
      case 3:
        month="Avril";
        break;
      case 4:
        month="Mai";
        break;
      case 5:
        month="Juin";
        break;
      case 6:
        month="Juillet";
        break;
      case 7:
        month="Aout";
        break;
      case 8:
        month="Septembre";
        break;
      case 9:
        month="Octobre";
        break;
      case 10:
        month="Novembre";
        break;
      case 11:
        month="Décembre";
        break;
      default:
        month="Invalid month";
    }

    document.querySelector('.startHour').innerHTML = dateDay +'/'+month+'/'+dateYear+'  à :'+ dateHours+':'+dateMinute+':'+dateSecond;

  }
  validateTrip(){
    var timercontainer= document.querySelector('.drivingTime');
    var spans = timercontainer.getElementsByTagName("span");
    var i = 0;
    var timerarray = [];
    for(i=0;i<spans.length;i++)
    {
      timerarray.push(spans[i].innerHTML);
    }
    localStorage.setItem( 'curentuserTime',  timerarray.toString());
    localStorage.setItem( 'curentuserStart',  document.querySelector('.startHour').innerHTML);

    clearInterval(this.timer);
      this.navCtrl.push(ContactPage);


    }

}
