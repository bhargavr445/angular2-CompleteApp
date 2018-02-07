import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { StudentService } from '../student-component/student-service';
import { SharedModule } from '../shared.module';
import { EditStudentComponent} from '../edit-student/edit-student.component';
import { StudentDetailsComponent } from '../student-component/student-details/student-details.component';


const studentRoute: Routes= [
    {   path:'',                    redirectTo:'studentList',                   pathMatch:'full'    },
    {   path:'studentList',         component: StudentComponentComponent,            children:           [
        //{path:'',                   redirectTo:'studentDetails',                pathMatch:'full'    },
        {path:'studentDetails/:id',     component: StudentDetailsComponent}
    ] },
    {   path:'editStudent/:id',     component: EditStudentComponent }
];


@NgModule({
    declarations:[
        StudentComponentComponent,
        EditStudentComponent,
        StudentDetailsComponent
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
        EditStudentComponent,
        StudentDetailsComponent
    ]

    })

export  class StudentModule{
    
}