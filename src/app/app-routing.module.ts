import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Router } from '@angular/router';
import { AppPreloadingStrategy } from './AppPreloadingStrategy';
import { AuthGuard } from './auth-guard.service';

const appRoutes:Routes=[
  { path:'employee',      
    loadChildren:'app/modules/employee.module#EmployeeModule',    
    data: { preload: true }
  },
  { path:'student',        
    loadChildren:'app/modules/student.module#StudentModule',      
    data: { preload: true }
  },
  { path:'profile',        
    loadChildren:'app/modules/profile.module#ProfileModule',      
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
  providers:[AppPreloadingStrategy, AuthGuard]
})
export class AppRoutingModule { }



