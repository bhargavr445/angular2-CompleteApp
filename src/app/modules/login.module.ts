import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LocalStorageService } from '../localStorageService';
import { SharedModule } from '../shared.module';
import { AuthService } from '../login/AuthService';

const logInRoute: Routes= [
  {   path:'',                    redirectTo:'login',                   pathMatch:'full'    },
  {   path:'login',     component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(logInRoute)
  ],
  declarations: [LoginComponent],
  providers:[
    AuthService
],
exports:[
  LoginComponent
]
})
export class LoginModule { }
