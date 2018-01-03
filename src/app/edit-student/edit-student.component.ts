import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../AppService';
import { Employee } from '../employee';
import { Student } from '../student';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

editStudentForm: FormGroup;
Employees: Employee[];
student:Student;
Students: Student[];
id:number=0;
idList:number[];
  constructor(private appService: AppService,
              private route: ActivatedRoute) {
    this.editStudentForm= new FormGroup({
      'id': new FormControl(null, Validators.required),
      'fName': new FormControl(null, Validators.required),
      'lName': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.appService.editStudent(this.id).subscribe(
      (responseData: any)=> this.init(responseData),
      (error)=> console.log(error)
    );
  }

  reset(){
    this.init(this.student);
  }

 init(stu: Student){
   this.student = stu;
   this.editStudentForm.setValue({
     id:stu.id,
     fName:stu.fName,
     lName:stu.lName,
     email:stu.email
   });
 }

 editStudent() {

 }

}
