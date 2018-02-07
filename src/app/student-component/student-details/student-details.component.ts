import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student-service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
id:number=0;
  constructor(private studentService: StudentService, 
              private router: ActivatedRoute){

  }

  ngOnInit() {
//this.id=+this.router.snapshot.params['id'];
console.log(this.id);
     this.id=+this.router.params.subscribe(
       (param:Params)=>{
        this.id=param['id'];
       }
     );
    // console.log(this.id);
  }

  
}
