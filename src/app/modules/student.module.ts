import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { StudentService } from '../student-component/student-service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';




const studentRoute: Routes= [
    {   path:'',                        redirectTo:'studentList',        pathMatch:'full'},
    {   path:'studentList',            component: StudentComponentComponent }
];

@NgModule({
    declarations:[StudentComponentComponent],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forChild(studentRoute)
    ],
    providers:[StudentService],
    exports:[StudentComponentComponent]

    })

export  class StudentModule{

}