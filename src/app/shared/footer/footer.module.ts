import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { AppModule } from '../../app.module';



@NgModule({
    declarations:[
        FooterComponent
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

export  class FooterModule{
    
}