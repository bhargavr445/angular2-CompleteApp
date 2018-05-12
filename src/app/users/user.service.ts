import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { HttpRequest } from '@angular/common/http';
import {  HttpClient, HttpClientModule } from '@angular/common/http'; 

@Injectable()
export class UserService{
  constructor(private http: HttpClient){

  }

  getAllUserData(){
      return this.http.get("http://localhost:8080/employee/getAllEmp").map(
          (responseData:Response)=>{
          const userList = responseData.json();
          return userList;
        });
  }
  
  deleteEmp(id){
    return this.http.delete(`${"http://localhost:8080/employee/deleteEmp"}/${id}`).map(
        (deleteresponse:any)=>{
            const delResp=deleteresponse.json();
            return delResp;
        }
    );
  }
 saveData(userData:any):Observable<number>{
     return this.http.post<number>('http://localhost:7070/MySpringMVC/springMvc/address/mapping',userData);
 }
  
  
 
 

}
