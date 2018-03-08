import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { AuthService } from '../login/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, 
              private localStorageService: LocalStorageService) { 

              }

  ngOnInit() {
  }
  logIn():void{
    this.authService.logIn().subscribe(
      
    );
  }

}
