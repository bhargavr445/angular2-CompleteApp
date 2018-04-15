import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http'
//import {HttpClient, HttpClientModule} from '@angular/common/http';
//import 'rxjs/Rx/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Student } from './student';


@Injectable()
export class AppService{

	constructor(private http: Http){

	}
	getData():Observable<Student[]>{
	console.log('I am working');
		return this.http.get('http://localhost:7070/MySpringMVC/springMvc/student/getAllStudents')
		.map(
		(response: Response) => {
			const data = response.json();
			console.log('Get Service');
			console.log(data);
			return data;
			}
		);
	}

	getEmpData(){
		return this.http.get("http://localhost:7070/MySpringMVC/springMvc/training/getAllEmp").
		map((empResp:Response)=>{
			const emp =empResp.json();
			return emp;
		}
		);
	}

	insertData(studentData: any[]){
		console.log(studentData);
			return this.http.post('https://angular-projecrt-db.firebaseio.com/data.json', studentData).
			map(
				(response: Response) => {
					const data = response.json();
					return data;
				}
			);

	}

	saveNewGame(newGame: any[]){
		return this.http.post("https://angular-projecrt-db.firebaseio.com/data.json", newGame).map(
			(response: Response) =>{
				const data = response.json();
				return data;
			}
		);
	}

	editStudent(id){
		return this.http.get(`${"http://localhost:7070/MySpringMVC/springMvc/training/getStudent"}/${id}`).map(
      (resp:Response)=>{
        const data = resp.json();
        return data;
      }
    );
	}

	editStudentSubmit(student){
	  console.log("Edit Service function");
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
		return this.http.put("http://localhost:7070/MySpringMVC/springMvc/training/updateStudent", 
		student).map(
      (resp:Response)=>{
        const data = resp.json();
        return data;
      }
    );

  }


}
