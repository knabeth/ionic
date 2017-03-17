import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    searchQuery: string = '';
    items: string[];
    localStorage = false;

    constructor(public navCtrl: NavController) {
        this.initializeItems();
    }

    addLocalStorage(){
        localStorage.setItem('button', JSON.stringify("yes"));
        this.localStorage = true;
    }

    initializeItems() {
        if(localStorage.getItem('button') != null){
            this.localStorage = true;
        }
        this.items = [
            'Amsterdam',
            'Bogota',
        ];
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}

