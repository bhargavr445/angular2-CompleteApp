import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee/employee-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';




const employeeRoute: Routes= [
    {   path:'',                    redirectTo:'employee',        pathMatch:'full'},
    {   path:'employee',            component: EmployeeComponent }
];

@NgModule({
    declarations:[EmployeeComponent],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forChild(employeeRoute)
    ],
    providers:[EmployeeService],
    exports:[EmployeeComponent]

    })

export  class EmployeeModule{

}