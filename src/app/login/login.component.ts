import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { AuthService } from '../login/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:string;
  constructor(private authService:AuthService, 
              private localStorageService: LocalStorageService) { 

              }

  ngOnInit() {
  }
  logIn():void{
     this.authService.logIn(this.userName).subscribe(
       (data)=>{
         this.localStorageService.setAuthData(data);
         console.log(data);
       }
     );
  }

}
