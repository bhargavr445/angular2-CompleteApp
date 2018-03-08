import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../AppService';
import { Employee } from '../employee';
import { Student } from '../student';
import { StudentService } from './student-service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../localStorageService';
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
  
  constructor(private studentService: StudentService,
              private router: Router,
              private route:ActivatedRoute,
              private localStorageService: LocalStorageService) {
      this.getStudentData();
      //this.getFirstNames();
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
        'email': new FormControl(null, Validators.required)
      });

    this.editStudentForm = this.newStudentForm;
    this.studentService.getFirstNames().subscribe(
      (firstNameList:any[])=>this.firstNames=firstNameList,
      (error)=> console.log(error)
    );
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
    // this.studentService.submitNewStudent(this.newStudentForm.value).subscribe(
    //   (respData: number)=>this.result=respData,
    //   (error)=>console.log(error)
    // );
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
      (addResponse: any)=>this.createResponse=addResponse,
      (error)=> console.log(error),
      ()=>this.getStudentData()
    );
    
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
