import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TokenParams } from "../model/tokenParams";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {Http} from '@angular/http';

@Injectable()
export class AuthService{

    constructor(private http: HttpClient){

    }
    logIn(userName:string):Observable<TokenParams>{
        const header=new Headers({'Content-type':'application/json'});
        console.log("Auth Service");
       return this.http.post<TokenParams>("http://localhost:7070/MySpringMVC/springMvc/student/logIn", userName);
    }

}