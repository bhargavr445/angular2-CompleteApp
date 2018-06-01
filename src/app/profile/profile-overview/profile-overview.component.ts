import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProfileNavComponent} from '../profile-nav/profile-nav.component';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './profile-overview.component.html',
  styleUrls: ['./profile-overview.component.css']
})
export class ProfileOverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  changeUserName() {
    this.router.navigate(['profile/changeUserName']);
  }
  changePassword() {
    this.router.navigate(['profile/changePassword']);
  }

}
