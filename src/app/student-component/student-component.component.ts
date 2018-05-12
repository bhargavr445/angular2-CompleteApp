import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../AppService';
import { Employee } from '../employee';
import { Student } from '../student';
import { StudentService } from './student-service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../localStorageService';

import { SpinnerService } from '../spinner.service';

declare var $;
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
  createResponse:any;
  studentRecord:Student;
  count:number=108;
  respData:any=0;
  
  constructor(private studentService: StudentService,
              private router: Router, private spinnerService: SpinnerService,
              private route:ActivatedRoute,
              private localStorageService: LocalStorageService) {
      this.getStudentData();
      this.getFirstNames();
      setTimeout( function(){
        $(function(){
          $('#dt').DataTable();
        });
      }, 1000);
  }
  ngOnChange(){
    this.getStudentData();
  }

  ngOnInit() {
    this.newStudentForm= new FormGroup({
        'id': new FormControl(null, Validators.required),
        'fName': new FormControl(null, Validators.required),
        'lName': new FormControl(null, Validators.required),
        'email': new FormControl(null, Validators.required),

      });

    this.editStudentForm = this.newStudentForm;
    this.studentService.getFirstNames().subscribe(
      (firstNameList:any[])=>this.firstNames=firstNameList,
      (error)=> console.log(error)
    );
  }

  getStudentData(){
   //this.spinnerService.show('mySpinner');
    this.studentService.getStudentData()
    .subscribe(
      data=>{
        this.Students=data;
      },err=>{
        console.log("Get All student data");
      });
    this.showAddButton=true;
  }
  submitNewStudent(){
    this.studentFormShow=false;
    this.getStudentData();
    this.showAddButton=true;

  }
displayModel(){
  
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
    this.studentService.deleteStudent(id).subscribe(
      (result:number)=>this.deleteResult=result,
      (error)=>console.log(error)
    );
    this.Students=null;
    this.getStudentData();
  }
  editStudent(id){
    this.router.navigate(['student/editStudent',id],
                        {queryParams:{edit:'445', editNow:'188', },   
                        fragment:'loading'});
  } 

  getFirstNames(){
    
  }

  getById(selectedId){
  }

  addNewStudentTest(){
    this.studentService.addNewStudentTest(this.newStudentForm.value).subscribe(
      data=>{
        this.respData=data;
        console.log(this.respData);
        this.getStudentData();
        //this.dispalyModel();
      },
       
        //
      err => {
         console.log("Error occured while creating data ")
     });
  }
  getStudentDetails(id:number){
      this.router.navigate(['studentDetails', id],{relativeTo:this.route});
  }
  getStudentByFName(fName:string){
    this.studentService.getStudentByFName(fName).subscribe(
      (studentRec:any)=>console.log(studentRec),
      //this.studentRecord=studentRec,
      (error)=> console.log(error)
    );
  }


}
