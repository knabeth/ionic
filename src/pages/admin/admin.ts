import { Component } from '@angular/core';
import { Http } from '@angular/http';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import 'rxjs/add/operator/map';
import {document} from "@angular/platform-browser/src/facade/browser";
import { Router } from '@angular/router';


@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html'
})
export class AdminPage {
public plaquevalue: string;


    constructor(public http: Http) {

    }

    validateplaque(){
        localStorage.setItem('plaqueId',this.plaquevalue)
        console.log(localStorage);
        alert('Nouvelle plaque enregistrée')
    }



}