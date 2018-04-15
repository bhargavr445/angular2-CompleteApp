import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { AuthService } from '../login/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userName:string="";
role:string="Select Data";
logInShow:boolean=true;
  constructor(private authService:AuthService, 
              private localStorageService: LocalStorageService, private router: Router) {}

  ngOnInit() {
  }
  logIn():void{
     this.authService.logIn(this.userName, this.role).subscribe(
       (data)=>{
         this.localStorageService.setAuthData(data);
         if(this.userName!=null) {
              this.router.navigate(['/employee']);
         }
       }
     );
  }
  
}
