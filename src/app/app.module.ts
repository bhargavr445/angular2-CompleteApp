import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SelectModule } from 'angular2-select';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppService } from './AppService';
import { uRouting } from './module-routing/user-routing';
import { lRouting } from './module-routing/login-routing';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './localStorageService';
import { reducers } from './store/app.reducers';

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
    AppRoutingModule,
    uRouting,
    lRouting,
    StoreModule.forRoot(reducers)
  ],
  providers: [AppService, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
