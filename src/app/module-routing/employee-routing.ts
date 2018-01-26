import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const employeeModuleRouting: Routes=[
    
    {path:'employee',       loadChildren:'app/modules/employee.module#EmployeeModule'}
];

export const eRouting: ModuleWithProviders = RouterModule.forRoot(employeeModuleRouting);