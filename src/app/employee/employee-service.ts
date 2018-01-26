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

	getDataToEdit(id){
		return this.http.get(`${"http://dummy.restapiexample.com/api/v1/employee"}/${id}`).map(
			(response:Response)=> {
				const data = response.json();
				return data;
			}
		);
	}

	updateEmp(Employee){
		//console.log(Employee);
		return this.http.post("http://dummy.restapiexample.com/api/v1/create", Employee).map(
			(response: Response)=>{
				const data = response.json();
				return data;
			}
		);
	  }

	  addNewStudent(Employee){
		  console.log(Employee);
		  //http://dummy.restapiexample.com/api/v1/create
		  return this.http.post("http://dummy.restapiexample.com/api/v1/create", Employee).map(
			  (response:Response)=>{
				  const data = response.json();
				  return data;
			  }
		  );
	  }
}
