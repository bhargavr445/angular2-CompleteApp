import { Employee } from "../../../entites/employee";
import * as EmployeeActions from '../store/employee.actions';

export interface featureState  {
    employes: State;
}
export interface State {
    employes: Employee[]; 
}

const initialState : State ={
    employes : null
}

export function employeeReducer(state=initialState, action: EmployeeActions.EmployeeActions) {
    switch(action.type) {
        case (EmployeeActions.GET_EMPLOYEES):
        console.log('get all employees');
        return {
            ...state,
            employes: [...action.payload]
        };
        default:
        return state;
    }
    
}