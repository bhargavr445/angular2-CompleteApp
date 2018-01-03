import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/AppService';
import { Employee } from 'app/employee';
import { Student } from 'app/student';
import { EmployeeService } from './employee-service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Employees: Employee[];
  Students: Student[];
  signUpForm: FormGroup;
  showFormToAdd:boolean=false;
  hideButton:boolean=false;
  genders = ['male', 'female'];

  constructor(private employeeService: EmployeeService) {
      this.getAllStudents();
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
  		'username': new FormControl(null, Validators.required),
  		'email' : new FormControl(null, [Validators.required, Validators.email]),
  		'gender' : new FormControl('male'),
      'state': new FormControl('Md')
  	});
  }

  getAllStudents(){
    this.employeeService.getAllStudents().
    subscribe((studentData: Employee[])=> this.Employees=studentData,
    (error)=> console.log(error));
      this.hideButton=true;
  }

  clearAllStudents(){
    this.Employees=null;
    this.hideButton=false;
    this.showFormToAdd=false;

  }

  AddForm(){
    this.showFormToAdd=true;
  }
}
