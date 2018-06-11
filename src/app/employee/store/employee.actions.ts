import {Action} from '@ngrx/store';
import { Employee } from '../../../entites/employee';


export const GET_EMPLOYEES = 'GET_EMPLOYEES';

export class GetEmployees implements Action {
    readonly type = GET_EMPLOYEES;
    constructor(public payload: Employee[]){

    }
}
export type EmployeeActions = GetEmployees;
