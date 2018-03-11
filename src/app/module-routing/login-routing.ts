import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';


const logInModuleRouting: Routes=[
    
    {path:'',       loadChildren:'app/modules/login.module#LoginModule'}
];

export const lRouting: ModuleWithProviders = RouterModule.forRoot(logInModuleRouting);