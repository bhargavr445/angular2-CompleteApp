import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const employeeModuleRouting: Routes=[
    
    {path:'employee', loadChildren:'app/modules/employee.module#EmployeeModule'}
];

//Users/bhargavrguntaka/Downloads/forms-reactive-startB/src/app/modules/employee.module.ts

export const eRouting: ModuleWithProviders = RouterModule.forRoot(employeeModuleRouting);