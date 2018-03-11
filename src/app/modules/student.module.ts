import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentService } from '../student-component/student-service';
import { SharedModule } from '../shared.module';
import { StudentRoutingModule } from '../module-routing/studentRouting.module';
import { InterceptorModule } from '../interceptor.module';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { StudentDetailsComponent } from '../student-component/student-details/student-details.component';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@NgModule({
    declarations:[
        StudentComponentComponent,
        StudentDetailsComponent,
        EditStudentComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        StudentRoutingModule,
        InterceptorModule,
    ],
    providers:[
        StudentService
    ],
    exports:[
    ]

    })

export  class StudentModule{
    
}