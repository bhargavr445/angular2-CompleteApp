import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { RouterModule, Routes } from '@angular/router';
import { StudentService } from './student-component/student-service';
import { AppComponent } from './app.component';
import { AppService } from './AppService';
import { StudentComponentComponent } from './student-component/student-component.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { eRouting } from './module-routing/employee-routing';

///Users/bhargavrguntaka/Downloads/forms-reactive-startB/src/app/module-routing/employee-routing.ts

const router: Routes=[
  { path:'',                    component: AppComponent },
  { path:'student',             component: StudentComponentComponent },
  { path:'editStudent/:id',     component: EditStudentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    EditStudentComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SelectModule,
    eRouting,
    RouterModule.forRoot(router)
  ],
  providers: [AppService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
