import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
    

const employeeRouting: Routes   =       [
        //Made path adjustments 
        // {   path:'',                        redirectTo:'employeeList',        pathMatch:'full'},
        {   path:'',            component: EmployeeComponent }//employeeList
];
@NgModule({
        imports:[
                RouterModule.forChild(employeeRouting)
        ],
        exports:[RouterModule]

})

export class EmployeeRoutingModule {

}