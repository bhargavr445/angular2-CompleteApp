import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../entites/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
@Input() public id:Employee;
  constructor() { }

  ngOnInit() {
  }

}
