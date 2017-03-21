import { Component } from '@angular/core';
import { Http } from '@angular/http';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import 'rxjs/add/operator/map';
import {document} from "@angular/platform-browser/src/facade/browser";
import { Router } from '@angular/router';
import {AboutPage} from '../about/about';


@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    posts: any;
    aboutPage = AboutPage;
    private items: string[];

    constructor(public http: Http) {
        /*REQUETTE ET STOCKAGE DANS LOCALSTORAGE*/

        var list=[];
        axios.get('http://catapultedriving.monsieursloop.com/index.php?function=get_users')
            .then(function (response) {
                var i = 0;
                for(i=0 ; i<response.data.users.length;i++) {
                    list.push(response.data.users[i].name);
                }
                localStorage.setItem( 'nom', JSON.stringify(list));

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
            var i = 0;
        document.querySelector('.list-md').style.display ='block';
            if( document.querySelector('.searchbar-input').value == this.items[this.items.indexOf(document.querySelector('.searchbar-input').value)]){
                document.querySelector('.validateuser').style.display ='block';
            }
            else{
                document.querySelector('.validateuser').style.display ='none';
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
        document.querySelector('.searchbar-input').value = event.toElement.innerText;
        document.querySelector('.list-md').style.display ='none';

        if( document.querySelector('.searchbar-input').value == this.items[this.items.indexOf(document.querySelector('.searchbar-input').value)]){
            document.querySelector('.validateuser').style.display ='block';
        }
        else{
            document.querySelector('.validateuser').style.display ='none';
        }

    }
    validateUser(){

        localStorage.setItem( 'curentuser',  document.querySelector('.searchbar-input').value);

    }




}



