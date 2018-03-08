import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TokenParams } from "../model/tokenParams";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {Http} from '@angular/http';

@Injectable()
export class AuthService{

    constructor(private http: HttpClient){

    }
    logIn():Observable<TokenParams>{
        //new Headers({'Content-type':'application'});
       return this.http.get<TokenParams>("");
    }

}