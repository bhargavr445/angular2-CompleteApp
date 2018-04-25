import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student-service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Address } from '../../model/Address';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id:number=0;
  address:Address;
  emptyAddress:string;
  showAddress:boolean=false;
//@Input() studentId: number;
  constructor(private studentService: StudentService, 
              private router: ActivatedRoute){ 

  }
  ngOnInit() {
    //this.id=+this.router.snapshot.params['id'];
      this.id=+this.router.params.subscribe(
        (param:Params)=>{
            this.id=param['id'];
            this.getAddress(this.id); 
           }
         );
      }

  getAddress(id:number): any{
    this.studentService.getAddressById(this.id).subscribe(
      (data)=>
       {
         this.address=data;
       });
    }



}


  // getAddress(id:number){
  //   console.log(id);
  //   this.studentService.getAddressById(id).subscribe(
  //     (studentAddress:any)=>//console.log(studentAddress),
  //     //this.address=studentAddress,
  //     {
  //       //console.log("StudentsLength"+studentAddress.length);
  //       if(studentAddress.length==0 ){
  //         console.log(studentAddress.length);
  //         this.showAddress=true;
  //         this.emptyAddress="Address Not Found";
  //       }
  //       else{
  //         this.showAddress=true;
  //         this.address=studentAddress;
  //       }
  //     }
      
  //   );
    
  // }