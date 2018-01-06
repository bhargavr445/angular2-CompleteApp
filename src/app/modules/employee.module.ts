import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeService } from '../employee/employee-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MouseOverDirective } from '../ditrctives/mouse-over.directive';




const employeeRoute: Routes= [
    {   path:'',                        redirectTo:'employeeList',        pathMatch:'full'},
    {   path:'employeeList',            component: EmployeeComponent }
];

@NgModule({
    declarations:[
        EmployeeComponent,
        MouseOverDirective
    
    ],
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