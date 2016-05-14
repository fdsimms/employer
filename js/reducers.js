import { combineReducers } from "redux";
import { REQUEST_EMPLOYEES,
         RECEIVE_EMPLOYEES,
         RECEIVE_EMPLOYEE,
         CHANGE_EMPLOYEE_JOB } from "./actions";

function employees(state = {
  isFetching: true,
  items: []
}, action) {
  let newItems = state.items.slice();

  switch (action.type) {
  case REQUEST_EMPLOYEES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_EMPLOYEE:
    newItems.push(action.employee);
    return Object.assign({}, state, {
      isFetching: true,
      items: newItems
    });
  case RECEIVE_EMPLOYEES:
    return Object.assign({}, state, {
      isFetching: false
    });
  case CHANGE_EMPLOYEE_JOB:
    var employee = Object.assign({}, newItems[action.employeeId]);
    employee.job = action.job;
    newItems[action.employeeId] = employee;
    return Object.assign({}, state, {
      items: newItems
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  employees
});

export default rootReducer;
