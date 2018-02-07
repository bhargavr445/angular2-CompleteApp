import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class UserService{
  constructor(private http: Http){

  }

  getAllUserData(){
      return this.http.get("http://localhost:8080/employee/getAllEmp").map(
          (responseData:Response)=>{
          const userList = responseData.json();
          return userList;
        }
      );
  }
  
  deleteEmp(id){
    return this.http.delete(`${"http://localhost:8080/employee/deleteEmp"}/${id}`).map(
        (deleteresponse:any)=>{
            const delResp=deleteresponse.json();
            return delResp;
        }
    );
  }
  
  

  
  
 
 

}
