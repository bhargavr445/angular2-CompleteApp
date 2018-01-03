import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http'
//import 'rxjs/Rx/add/operator/map';
import 'rxjs/Rx';


@Injectable()
export class AppService{

	//url:string="http://localhost:9090/MySpringMVC/springMvc/training/getStudent/?";

	//url: string="http://localhost:9090/MySpringMVC/springMvc/training/getStudent/";
	constructor(private http: Http){

	}
	getData(){
	console.log('I am working');
		return this.http.get('http://localhost:9090/MySpringMVC/springMvc/student/getAllStudents')
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


	// getList(){
	// 	return this.http.get(this.url).map(
	// 		(response: Response)=>response.json());
	// }



	



	editStudent(id){
    return this.http.get(`${"http://localhost:7070/MySpringMVC/springMvc/training/getStudent"}/${id}`).map(
      (resp:Response)=>{
        const data = resp.json();
        return data;
      }
    );
  }



}
