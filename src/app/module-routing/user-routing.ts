import {RouterModule, Routes} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const userModuleRouting: Routes=[
    
    {path:'user', loadChildren:'app/modules/user.module#UserModule'}
];

export const uRouting: ModuleWithProviders = RouterModule.forRoot(userModuleRouting);