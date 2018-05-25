import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Employee } from './employee';
import { Student } from './student';
import { AppService } from './AppService';
import { LocalStorageService } from './localStorageService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    @Input() userName;
    Employees: Employee[];
    gamesList: FormGroup;
    firstNames:string[];
    id:number=1;
    user:string;
    printUserName:string="";

constructor(private appService: AppService, 
              private localStorageService: LocalStorageService, 
              private router: Router) {
                
  }

  ngOnInit(){
    this.getData();
    this.gamesList=new FormGroup({
        'game': new FormControl(null),
        'platform': new FormControl(null),
        'release': new FormControl(null)
    });
  }


  changeEvent(selectedData: any[]){
    console.log(selectedData);
  }

  onInputChange(changingData: any[]){
    console.log(changingData);
  }

  getData(){
    console.log("Initilized from ngOnInit");
    this.printUserName = this.localStorageService.getAuthData().userName;
  }
  logOut(){
    this.localStorageService.clearData();
    this.router.navigate(['./login']);
  }
}
