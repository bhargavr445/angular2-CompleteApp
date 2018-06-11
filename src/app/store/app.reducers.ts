import * as fromAuth from '../login/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: fromAuth.State   
    //add new states like studentState, empState etc..
}

export const reducers: ActionReducerMap<AppState> = { //register all the reducers
    auth: fromAuth.authReducer
};