import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TokenParams } from "../model/tokenParams";
import { HttpClientModule, HttpClient, HttpHeaders } from "@angular/common/http";
import {Http} from '@angular/http';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../login/store/auth.actions';
@Injectable()
export class AuthService{
 tp:Observable<TokenParams>;
    constructor(private http: HttpClient,
                private store: Store<fromApp.AppState>){

    }
    logIn(userName:string, role:string):Observable<TokenParams>{
        //const header=new Headers({'Content-type':'application/json'});
        //console.log("Auth Service");
        // let header = new HttpHeaders();
        // let other_header = header.append('token',userName);
        // other_header =header.append('role','admin');
        //console.log(other_header.get('token'))

const other_header = new HttpHeaders({'Content-type':'application/json','token':userName,'role':role});
       this.tp = this.http.get<TokenParams>("http://localhost:8080/rest/users/logIn", {headers: other_header});
       this.store.dispatch(new AuthActions.Signin());
       //("http://localhost:7070/MySpringMVC/springMvc/student/logIn", {headers: other_header});
       return this.tp;
       //,{headers: other_header}
    }

}

// Since 5.0.0-beta.6 is now possible to skip the creation of 
// a HttpHeaders object an directly pass an object map as argument. 
// So now its possible to do the following:

// http.get('someurl',{
//    headers: {'header1':'value1','header2':'value2'}
// });