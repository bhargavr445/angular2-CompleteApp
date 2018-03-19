import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Employee } from './employee';
import { Student } from './student';
import { AppService } from './AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    @Input() userNameC;
    Employees: Employee[];
    gamesList: FormGroup;
    firstNames:string[];
    id:number=1;
    teams=[
            {
              name:'Va',
              id:1
            },
            {
              name:'Md',
              id:2
            },
            {
              name:'Dc',
              id:3
            }
          ];

  constructor(private appService: AppService) {
  }

  ngOnInit(){


    this.gamesList=new FormGroup({
        'game': new FormControl(null),
        'platform': new FormControl(null),
        'release': new FormControl(null)
    });
  }


  changeEvent(selectedData: any[]){
    console.log(selectedData);
  }

  // AddForm(){
  //   this.showFormToAdd=true;
  // }

  onInputChange(changingData: any[]){
    console.log(changingData);
  }

  // onSubmit(){
  // this.appService.insertData(this.signUpForm.value).
  //   subscribe(
  //     (studentData : string[])=> this.insertValue=studentData,
  //     (error) => console.log(error)
  //   );
  // }

  // getDataById(){
  //   console.log(this.id);
  //   this.appService.getStuById(this.id).subscribe(respData=> this.Employees=respData);
  // }

  getData(){
    console.log("Initilized from ngOnInit");
  }
}
