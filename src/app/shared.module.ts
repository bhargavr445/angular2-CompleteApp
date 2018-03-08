import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeService } from './employee/employee-service';
import { MouseOverDirective } from './ditrctives/mouse-over.directive';
import { UppercaseDirective } from './ditrctives/uppercase.directive';
import { AuthInterceptor } from './Interceptors/AuthInterceptor'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CacheInterceptor } from './Interceptors/CacheInterceptor';
import { LocalStorageService } from './localStorageService';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
      EmployeeService,
      LocalStorageService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CacheInterceptor,
        multi: true
      }
    ],
  
  declarations: [
      MouseOverDirective,
      UppercaseDirective
    ],
  
      exports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MouseOverDirective,
        UppercaseDirective
]

})
export class SharedModule { 
  
}