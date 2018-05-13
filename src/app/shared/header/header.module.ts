import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AppModule } from '../../app.module';



@NgModule({
    declarations:[
        HeaderComponent
    ],
    imports:[
        CommonModule,
        AppModule
    ],
    providers:[
    ],
    exports:[
    ]

    })

export  class HeaderModule{
    
}