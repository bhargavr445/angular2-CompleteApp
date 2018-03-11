import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Router } from '@angular/router/src/router';
const appRoutes:Routes=[
  {path:'employee',       loadChildren:'app/modules/employee.module#EmployeeModule'},
  {path:'student',        loadChildren:'app/modules/student.module#StudentModule'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}
    )
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
