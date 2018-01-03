import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from 'app/student-component/student-service';
import { EmployeeService } from 'app/employee/employee-service';
import { AppComponent } from './app.component';
import { AppService } from './AppService';
import { StudentComponentComponent } from './student-component/student-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const router: Routes=[
  { path:'',                    component:AppComponent },
  { path:'employee',            component:EmployeeComponent },
  { path:'student',             component:StudentComponentComponent },
  { path:'editStudent/:id',     component:EditStudentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    EmployeeComponent,
    EditStudentComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SelectModule,
    RouterModule.forRoot(router)
  ],
  providers: [AppService, StudentService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
