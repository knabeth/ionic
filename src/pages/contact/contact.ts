import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {



    document.querySelector('.recapName').innerHTML = localStorage.getItem( 'curentuser');
    document.querySelector('.recapStart').innerHTML = localStorage.getItem( 'curentuserStart');
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

    document.querySelector('.recapEnd').innerHTML = dateDay +'/'+month+'/'+dateYear+'  à :'+ dateHours+':'+dateMinute+':'+dateSecond;;
    localStorage.setItem( 'curentuserEnd', document.querySelector('.recapEnd').innerHTML);

    document.querySelector('.recapTime').innerHTML = localStorage.getItem( 'curentuserTime');
    document.querySelector('.recapConcession').innerHTML = localStorage.getItem( 'curentuserConcession');
    document.querySelector('.recapVille').innerHTML = localStorage.getItem( 'curentuserVille');

  }
  storeDatas(){
    var sendNom = localStorage.getItem('curentuser');
    var sendConcession = localStorage.getItem('curentuserConcession');
    var sendVille = localStorage.getItem('curentuserVille');
    var sendStart = localStorage.getItem('curentuserStart');
    var sendTime = localStorage.getItem('curentuserTime');
    var sendEnd = localStorage.getItem('curentuserEnd');
    var sendSignature = localStorage.getItem('curentuserSignature');
    var localLenght = localStorage.length.toString();
    var curentuserTab = {sendNom,sendConcession,sendStart,sendTime,sendEnd,sendSignature};

    console.log(localStorage.getItem('users') )


    if(localStorage.getItem('users') != null){
      var users = JSON.parse(localStorage.getItem('users'));

      var number = 0;

      for(var i = 0; i < users.lenght; i++){
        number++;
      }

      var newUserId = number+1;

      var newUser = {
        id: newUserId,
        firstName: "Raphael",
        lastName: "Marquand"
      }

      users.push(newUser);

      localStorage.setItem('users', JSON.stringify(users));
    }

    else{
      console.log('ead' )

      var user =
          [{
            id: 0,
            firstName: "Maxime",
            lastName: "Sahagian"
          }];

      localStorage.setItem('users', JSON.stringify(user));
    }

  }

}
