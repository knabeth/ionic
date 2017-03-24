import { Component } from '@angular/core';
import { Http } from '@angular/http';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import 'rxjs/add/operator/map';
import {document} from "@angular/platform-browser/src/facade/browser";
import { Router } from '@angular/router';
import { AboutPage } from '../about/about';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    showsecondCard = true;
    hideList = false;
    searchbarText = "";
    seconde = "00";
    minute = "00";
    heure = "00";
    aboutTitle =localStorage.getItem( 'curentuser')

    posts: any;
    aboutPage = AboutPage;
    private items: string[];

    constructor(public http: Http) {
        /*REQUETTE ET STOCKAGE DANS LOCALSTORAGE*/

        var concession = [];
        var ville = [];
        var list = [];
        axios.get('http://catapultedriving.monsieursloop.com/index.php?function=get_users')
            .then(function (response) {
                var i = 0;
                for(i=0 ; i<response.data.users.length;i++) {
                    list.push(response.data.users[i].name);
                    concession.push(response.data.users[i].concession);
                    ville.push(response.data.users[i].ville);

                }
                localStorage.setItem( 'nom', JSON.stringify(list));
                localStorage.setItem( 'concession', JSON.stringify(concession));
                localStorage.setItem( 'ville', JSON.stringify(ville));
        console.log(localStorage)


            })
            .catch(function (error) {
            });

        this.initializeItems()

    }

        /*PREPARATION DE L AUTO COMPLETION AVEC SRC LOCALSTORAGE*/
    initializeItems() {
        var localList = localStorage.getItem('nom');
        this.items = JSON.parse(localList);
    }
    getItems(ev: any) {
       var localList = localStorage.getItem('nom');
        this.items = JSON.parse(localList);

        this.hideList = false;
            if( this.searchbarText == this.items[this.items.indexOf(this.searchbarText)]){
                this.showsecondCard = false;
            }
            else{
                this.showsecondCard = true;
            }




        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {

            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }

    }
    selectUser(event){

        this.hideList = true;
        this.showsecondCard = false;
        this.searchbarText =    event.toElement.innerText;
        document.querySelector('.searchbar-input').value  = event.toElement.innerText;
    }
    validateUser(){
        var tabparse = JSON.parse("[" + localStorage.getItem('nom') + "]")

        localStorage.setItem( 'curentuser',  this.searchbarText);
        console.log(localStorage.getItem('curentuser'))
        console.log()


        localStorage.setItem( 'curentuserConcession', JSON.parse(localStorage.getItem('concession') )[tabparse[0].indexOf(  localStorage.getItem('curentuser') )] );
        localStorage.setItem( 'curentuserVille',  JSON.parse(localStorage.getItem('ville') )[tabparse[0].indexOf(  localStorage.getItem('curentuser') )] );
        console.log(localStorage)

    }




}