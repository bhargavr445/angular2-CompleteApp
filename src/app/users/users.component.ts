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
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUserData().subscribe(
      (userDetails:User[])=>this.userList=userDetails,
      (error)=>console.log(error)
    );
  }
}
