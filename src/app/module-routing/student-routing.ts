import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const studentModuleRouting: Routes=[
    
    {path:'student', loadChildren:'app/modules/student.module#StudentModule'}
];

export const sRouting: ModuleWithProviders = RouterModule.forRoot(studentModuleRouting);