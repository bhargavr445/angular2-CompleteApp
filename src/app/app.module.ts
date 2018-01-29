import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './AppService';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { eRouting } from './module-routing/employee-routing';
import { sRouting } from './module-routing/student-routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SelectModule,
    eRouting,
    sRouting
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
