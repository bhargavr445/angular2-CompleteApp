import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { EditStudentComponent} from '../edit-student/edit-student.component';
import { StudentDetailsComponent } from '../student-component/student-details/student-details.component';


const studentRouting: Routes=[
    {   path:'',                    redirectTo:'studentList',                   pathMatch:'full'    },
    {   path:'studentList',         component: StudentComponentComponent,       children:[
        {   path:'studentDetails/:id',     component: StudentDetailsComponent   }
    ]
     },
    {   path:'editStudent/:id',     component: EditStudentComponent }
    
];

@NgModule({
    imports:[RouterModule.forChild(studentRouting)],
    exports:[RouterModule]

})

export class StudentRoutingModule {

}