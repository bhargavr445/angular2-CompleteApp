import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
userList:User[];
deleteRespData:number;
  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.userService.getAllUserData().subscribe(
      (userDetails:User[])=>this.userList=userDetails,
      (error)=>console.log(error)
    );
  }

  deleteEmp(id){
    console.log(id);
    this.userService.deleteEmp(id).subscribe(
      (delresp:any)=>this.deleteRespData=delresp,
      (error)=>console.log(error)
    );
  }
}
