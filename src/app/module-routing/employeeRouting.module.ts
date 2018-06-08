import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
import { AuthGuard } from '../auth-guard.service';
    

const employeeRouting: Routes   =       [
        //Made path adjustments 
        // {   path:'',                        redirectTo:'employeeList',        pathMatch:'full'},
        {   path:'',      canActivate:[AuthGuard],      component: EmployeeComponent }//employeeList
];
@NgModule({
        imports:[
                RouterModule.forChild(employeeRouting)
        ],
        exports:[RouterModule]

})

export class EmployeeRoutingModule {

}