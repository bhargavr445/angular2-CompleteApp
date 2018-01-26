import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { SharedModule } from '../shared.module';

const employeeRoute: Routes= [
    {   path:'',                        redirectTo:'employeeList',        pathMatch:'full'},
    {   path:'employeeList',            component: EmployeeComponent }
];

@NgModule({
    declarations:[
        EmployeeComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(employeeRoute)
    ],
    providers:[],
    exports:[EmployeeComponent]
    })

export  class EmployeeModule{

}