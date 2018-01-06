import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'app/AppService';
import { Employee } from 'app/employee';
import { Student } from 'app/student';
import { StudentService } from './student-service';
@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  newStudentForm: FormGroup;
  editStudentForm: FormGroup;
  studentFormShow:boolean=false;
  result:number=0;
  deleteResult:number=0;
  editResponse:number=0;
  Students: Student[];
  showAddButton:boolean=false;
  showData:boolean=true;
  showEditForm:boolean=false;
  firstNames: string[];
  reactiveValue :string;
  idList:[
    {'id':1},
      {'id':2},
      {'id':3}
  ];
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
  constructor(private studentService: StudentService,
              private router: Router) {
      this.getStudentData();
      this.getFirstNames();
  }
  ngOnChange(){
    this.getStudentData();
  }
  ngOnInit() {
    this.newStudentForm= new FormGroup({
        'id': new FormControl(null, Validators.required),
        'fName': new FormControl(null, Validators.required),
        'lName': new FormControl(null, Validators.required),
        'email': new FormControl(null, Validators.required)
      });

    this.editStudentForm = this.newStudentForm;

  }

  UpperCase(event) {
    console.log(event);
    this.reactiveValue = event;
    
    //this.form.get('amount').patchValue(event);
  }

  getStudentData(){
    this.studentService.getStudentData().subscribe(
      (studentList:Student[])=>this.Students=studentList,
      (error)=> console.log(error)
    );
    this.showAddButton=true;
  }
  submitNewStudent(){
    this.studentFormShow=false;
    // console.log(this.newStudentForm.value);
    this.studentService.submitNewStudent(this.newStudentForm.value).subscribe(
      (respData: number)=>this.result=respData,
      (error)=>console.log(error)
    );
    //this.newStudentForm.reset();
    this.getStudentData();
    this.showAddButton=true;

  }

  hideStudentForm(){
    this.studentFormShow=false;
    this.showAddButton=true;
    this.newStudentForm=null;
  }
  addNewStudent(){
    this.studentFormShow=true;
    this.showAddButton=false;
      this.newStudentForm=null;
  }

  deleteStudent(id){
    this.studentService.deleteStudent(id)
    .subscribe((result:number)=>this.deleteResult=result,(error)=>console.log(error));
    this.Students=null;
    this.getStudentData();
  }
  editStudent(id){
    this.router.navigate(['student/editStudent',id]);
  }

  getFirstNames(){
    this.studentService.getFirstNames().subscribe(
      (firstNameList:string[])=>this.firstNames=firstNameList,
      (error)=> console.log(error)
    );
  }

  getById(selectedId){
    alert(selectedId);
  }

}
