import {Action} from '@ngrx/store';

export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';

export class Signin implements Action {
    
    readonly type = SIGNIN;
    constructor(){
        console.log("Sign In action executed")
    }
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export type AuthActions = Signin | Logout;