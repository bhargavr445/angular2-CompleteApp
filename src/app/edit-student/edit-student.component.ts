import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppService } from '../AppService';
import { Employee } from '../employee';
import { Student } from '../student';
import { StudentService }from '../student-component/student-service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit, OnDestroy {

editStudentForm: FormGroup;
Employees: Employee[];
student:Student;
Students: Student[];
id:number;
dResponse: any;
idList:number[];
subscribeParams : Subscription;

  constructor(private appService: AppService,
              private route: ActivatedRoute,
            private router: Router) {
    this.editStudentForm= new FormGroup({
      'id': new FormControl(null, Validators.required),
      'fName': new FormControl(null, Validators.required),
      'lName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    //this.id=this.route.snapshot.params['id'];  
    //Use the above approach only if we dont need to reload page from the same component
    //1. 
    this.subscribeParams=this.route.params.subscribe(
      (param: Params)=>{
        this.student={
          id:param['id'],
          fName:param['fname'],
          lName:param['lname'],
          email:param['email']
        };
      }
    );
    console.log(this.route.fragment.subscribe());
    console.log(this.route.queryParams.subscribe());
    this.appService.editStudent(this.student.id).subscribe(
      (responseData: any)=> this.init(responseData),
      (error)=> console.log(error)
    );
  }

  ngOnDestroy(){
    this.subscribeParams.unsubscribe();
  }

  reset(){
    this.init(this.student);
  }

 init(stu: Student){
   //this.student = stu;
    const studentReset =JSON.parse(JSON.stringify(stu));
   this.editStudentForm.setValue({
     id:stu.id,
     fName:stu.fName,
     lName:stu.lName,
     email:stu.email
   });
 }

 editStudent() {
    console.log(this.editStudentForm.value);
    this.appService.editStudentSubmit(this.editStudentForm.value).subscribe(
      (deleteResponse:any)=>this.dResponse=deleteResponse,
      (error)=>console.log(error)
    );
    this.router.navigate(['student/studentList']);
 }
 getDetails(id:number){
   
 }
}
