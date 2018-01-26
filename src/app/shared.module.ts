import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee/employee-service';
import { MouseOverDirective } from './ditrctives/mouse-over.directive';
import { UppercaseDirective } from './ditrctives/uppercase.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [
      EmployeeService
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