import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ProfileComponent } from '../profile/profile.component';
import { ProfileRoutingModule } from '../module-routing/profilesRouting.module';
import {ProfileNavComponent} from '../profile/profile-nav/profile-nav.component';
import { InterceptorModule } from '../interceptor.module';
import {ProfileOverviewComponent} from '../profile/profile-overview/profile-overview.component'
import {ChangeUserNameComponent} from '../profile/change-user-name/change-user-name.component';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';
@NgModule({
    declarations:[
        ProfileComponent,
        ProfileNavComponent,
        ProfileOverviewComponent,
        ChangeUserNameComponent,
        ChangePasswordComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        ProfileRoutingModule,
        InterceptorModule,
    ],
    providers:[
    ],
    exports:[
    ]

    })

export  class ProfileModule{
    
}