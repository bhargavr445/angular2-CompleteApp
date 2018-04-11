import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Router } from '@angular/router';
import { AppPreloadingStrategy } from './AppPreloadingStrategy';
const appRoutes:Routes=[
  { path:'employee',       
    loadChildren:'app/modules/employee.module#EmployeeModule',    
    data: { preload: true }
  },
  { path:'student',        
    loadChildren:'app/modules/student.module#StudentModule',      
    data: { preload: true }
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: AppPreloadingStrategy}//add AppPreloadingStrategy to customize preloading
    )//PreloadAllModules
  ],
  exports:[RouterModule],
  declarations: [],
  providers:[AppPreloadingStrategy]
})
export class AppRoutingModule { }



