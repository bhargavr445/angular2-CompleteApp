import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class StudentService{
  constructor(private http: Http){

  }
  getStudentData(){
    return this.http.get("http://localhost:7070/MySpringMVC/springMvc/student/getAllStudents").map(
      (response:Response)=>{
        const studentData = response.json();
        return studentData;
      }
    );
  }

  submitNewStudent(newStudentData:any[]){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post("http://localhost:7070/MySpringMVC/springMvc/training/createStudent", newStudentData, options).map(
      (response: Response)=>{
        const data= response.json();
        return data;
      }
    );
  }

  
  deleteStudent(id){
		  return this.http.delete(`${"http://localhost:7070/MySpringMVC/springMvc/training/deleteStudent"}/${id}`)
      .map((deleteResp:Response)=>{
		  		const result = deleteResp.json();
		  		return result;
		  	}
		  );
	}

  getFirstNames(){
		return this.http.get("http://localhost:7070/MySpringMVC/springMvc/training/getStudentNamesList")
		.map((fnamesResponse: Response)=>
		{
			const data = fnamesResponse.json()
			return data;
		}
	);
  }
  
  

}
