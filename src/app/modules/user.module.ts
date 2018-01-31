import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { SharedModule } from '../shared.module';
import { UserService } from '../users/user.service';

const userRoute: Routes= [
    {   path:'',                        redirectTo:'userList',        pathMatch:'full'},
    {   path:'userList',            component: UsersComponent }
];

@NgModule({
    declarations:[
        UsersComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(userRoute)
    ],
    providers:[
        UserService
    ],
    exports:[UsersComponent]
    })

export  class UserModule{

}