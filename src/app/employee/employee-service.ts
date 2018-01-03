import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
import 'rxjs/Rx';


@Injectable()
export class EmployeeService{
  constructor(private http: Http){

  }

  getAllStudents(){
		return this.http.get("http://localhost:7070/MySpringMVC/springMvc/training/getAllEmp").map(
			(response:Response)=>{
				const data = response.json();
				return data;
			}
		);
	}
}
