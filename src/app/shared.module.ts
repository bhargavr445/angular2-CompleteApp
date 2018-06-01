import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee/employee-service';
import { MouseOverDirective } from './ditrctives/mouse-over.directive';
import { UppercaseDirective } from './ditrctives/uppercase.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from './localStorageService';
import { SpinnerService } from './spinner.service';
import { ShortenPipe } from './pipes/shorten.pipe';
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
      SpinnerService
    ],
  
  declarations: [
      MouseOverDirective,
      UppercaseDirective,
      ShortenPipe
    ],
  
      exports:[
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        MouseOverDirective,
        UppercaseDirective,
        HttpClientModule,
        ShortenPipe
]

})
export class SharedModule { 
  
}