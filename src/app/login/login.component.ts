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
userName:string="bhargav";
logInShow:boolean=true;
  constructor(private authService:AuthService, 
              private localStorageService: LocalStorageService, private router: Router) { 

              }

  ngOnInit() {
  }
  logIn():void{
     this.authService.logIn(this.userName).subscribe(
       (data)=>{
         this.localStorageService.setAuthData(data);
         console.log(data);
        
         if(this.userName!=null){
          this.router.navigate(['/employee/employeeList']);
         }
         
       }
       
     );
  }
  logOut(){
    this.localStorageService.clearData();
    this.router.navigate(['./login']);
  }
  

}
