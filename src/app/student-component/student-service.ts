import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import {  HttpClient } from '@angular/common/http'; 
import 'rxjs/Rx';
import { Student } from '../student';
import { Observable } from 'rxjs/Observable';
import { Address } from '../model/Address';

@Injectable()
export class StudentService{
  constructor(private httpC: HttpClient, private http: Http){

  }
  getStudentData():Observable<Student[]>{
    return this.httpC.get<Student[]>("http://localhost:7070/MySpringMVC/springMvc/student/getAllStudents");
  }

  // submitNewStudent(newStudentData:any[]){
  //   let headers = new Headers({'Content-Type': 'application/json'});
  //   let options = new RequestOptions({headers: headers});
  //   return this.http.post("http://localhost:7070/MySpringMVC/springMvc/training/createStudent", newStudentData, options).map(
  //     (response: Response)=>{

        
  //       const data= response.json();
  //       return data;
        
  //     }
  //   );
  // }

  
  deleteStudent(id){
		  return this.http.delete(`${"http://localhost:7070/MySpringMVC/springMvc/training/deleteStudent"}/${id}`)
      .map(
        (deleteResp:Response)=>{
		  		const result = deleteResp.json();
		  		return result;
		  	}
		  );
	}

  getFirstNames(){
		return this.http.get("http://localhost:7070/MySpringMVC/springMvc/training/getStudentNamesList")
		.map(
      (fnamesResponse: Response)=>
		{
			const data = fnamesResponse.json();
			return data;
		}
	);
  }
  
  addNewStudentTest(student){
    return this.http.post("http://localhost:7070/MySpringMVC/springMvc/training/createStudent", student).map(
      (response:Response)=>{
        const data = response.json();
        return data;
      }
    );
  }

  getAddressById(id):Observable<Address>{
    return this.httpC.get<Address>(`${"http://localhost:7070/MySpringMVC/springMvc/address/getAddressById"}/${id}`);
    
  }
  getStudentByFName(fName:string){
    return this.http.get(`${"http://localhost:7070/MySpringMVC/springMvc/training/getDetailsByName"}/${fName}`).map(
      (response:Response)=>{
        const data=response.json();
        return data;
      }
    );
  }
 

}
