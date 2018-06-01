import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import {ProfileOverviewComponent} from '../profile/profile-overview/profile-overview.component';
import {ChangeUserNameComponent} from '../profile/change-user-name/change-user-name.component';
import { ChangePasswordComponent } from '../profile/change-password/change-password.component';    

const profileRouting: Routes   =       [
        {   path:'',            component: ProfileComponent,
        children:[ 
            {   path:'profileLanding',     component: ProfileOverviewComponent   },
            {   path:'changeUserName',     component:  ChangeUserNameComponent  },
            {   path:'changePassword',     component:  ChangePasswordComponent  }
        ]
    }
];
@NgModule({
        imports:[
                RouterModule.forChild(profileRouting)
        ],
        exports:[RouterModule]

})

export class ProfileRoutingModule {

}