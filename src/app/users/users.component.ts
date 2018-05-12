import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users/user.service';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userList:User[];
id:number;
userForm:FormGroup;
deleteRespData:number;
  constructor(private userService: UserService, private fb: FormBuilder) { 
   this.userForm = this.fb.group({
      name:['bhargv'],
      sal:[201],
      address:this.fb.group({
        line1:['leehwy'],
        apt:[812],
        city:['fairfax'],
        state:['va'],
        zip:['22031']
      })
    })
  }

  ngOnInit() {
    console.log('initWorking');
    this.userService.getAllUserData().subscribe(
      (userDetails:User[])=>this.userList=userDetails,
      (error)=>console.log(error)
    );
  }

  deleteEmp(id) {
    console.log(id);
    this.userService.deleteEmp(id).subscribe(
      (delresp:any)=>this.deleteRespData=delresp,
      (error)=>console.log(error)
    );
  }
  addUser(){
    this.userService.saveData(this.userForm.value).subscribe(
      data=>{
        this.id=data;
      },err=>{
        console.log('error Occured');
      }
    );
  }
}
