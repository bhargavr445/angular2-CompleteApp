import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentComponentComponent } from '../student-component/student-component.component';
import { EditStudentComponent} from '../edit-student/edit-student.component';
import { StudentDetailsComponent } from '../student-component/student-details/student-details.component';
import { AuthGuard } from '../auth-guard.service';

const studentRouting: Routes=[
    {   path:'',                    redirectTo:'studentList',                   pathMatch:'full'    },
    {   path:'studentList',         
        canActivateChild:[AuthGuard],
        component: StudentComponentComponent,       
        children:[ 
        {   path:'studentDetails/:id',     component: StudentDetailsComponent   }
    ]
     },
    {   path:'editStudent/:id',  canActivate: [AuthGuard],   component: EditStudentComponent }
    
];

@NgModule({
    imports:[RouterModule.forChild(studentRouting)],
    exports:[RouterModule],
    providers:[AuthGuard]

})

export class StudentRoutingModule {

}