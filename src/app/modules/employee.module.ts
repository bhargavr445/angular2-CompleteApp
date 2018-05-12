import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from '../employee/employee.component';
import { SharedModule } from '../shared.module';
import { InterceptorModule } from '../interceptor.module';
import { EmployeeRoutingModule } from '../module-routing/employeeRouting.module';
import {EmployeeDetailsComponent} from '../employee/employee-details/employee-details.component';



@NgModule({
    declarations:[
        EmployeeComponent,
        EmployeeDetailsComponent
    ],
    imports:[
        SharedModule,
        InterceptorModule,
        CommonModule,
        EmployeeRoutingModule
    ],
    providers:[],
    exports:[
        //EmployeeComponent
    ]
    })

export  class EmployeeModule{

}