import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const logInModuleRouting: Routes=[
    
    {path:'login',       loadChildren:'app/modules/login.module#LoginModule'}
];

export const lRouting: ModuleWithProviders = RouterModule.forRoot(logInModuleRouting);