import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalStorageService } from '../localStorageService';
import { AuthService } from '../login/AuthService';
import { Router } from '@angular/router';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../login/store/auth.reducers';
import { Observable } from 'rxjs/Observable';
import * as AuthActions from '../login/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string="";
  role:string="Select Data";
  loggedInUserName:string="";
  logInShow:boolean=true;
  constructor(private authService:AuthService, 
              private localStorageService: LocalStorageService, 
              private router: Router,
              private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    
  }
  logIn():void{
     this.authService.logIn(this.userName, this.role).subscribe(
       (data)=>{
         this.localStorageService.setAuthData(data);
         //alert(this.localStorageService.getAuthData().userName);
         this.store.dispatch(new AuthActions.Signin());
         this.loggedInUserName = this.localStorageService.getAuthData().userName;
         if(this.localStorageService.getAuthData().userName!=null) {
              this.router.navigate(['/employee']);
         }
       },(err)=>{
         console.log('login Failed');
       }
     );
  }
  
}
