import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
    

const employeeRouting: Routes=[
        {   path:'',                        redirectTo:'employeeList',        pathMatch:'full'},
        {   path:'employeeList',            component: EmployeeComponent }
];
@NgModule({
        imports:[
                RouterModule.forChild(employeeRouting)
        ],
        exports:[RouterModule]

})

export class EmployeeRoutingModule {

}