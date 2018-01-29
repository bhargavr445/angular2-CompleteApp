import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { StudentService } from '../student-component/student-service';
import { SharedModule } from '../shared.module';
import { EditStudentComponent} from '../edit-student/edit-student.component';


const studentRoute: Routes= [
    {   path:'',                            redirectTo:'studentList',        pathMatch:'full'},
    {   path:'studentList',                 component: StudentComponentComponent },
    {   path:'editStudent/:id',     component: EditStudentComponent }
];


@NgModule({
    declarations:[
        StudentComponentComponent,
        EditStudentComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        RouterModule.forChild(studentRoute)
    ],
    providers:[
        StudentService
    ],
    exports:[
        StudentComponentComponent,
        EditStudentComponent
    ]

    })

export  class StudentModule{

}