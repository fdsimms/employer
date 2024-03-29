import { combineReducers } from "redux";
import { REQUEST_EMPLOYEES,
         RECEIVE_EMPLOYEES,
         RECEIVE_EMPLOYEE,
         CHANGE_EMPLOYEE_JOB } from "./employeeActions";
import { TOGGLE_MODAL } from "./modalActions";

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

function modal(state = {
  employee: null,
  isShowing: false
}, action) {
  switch (action.type) {
  case TOGGLE_MODAL:
    return Object.assign({}, state, {
      employee: action.employee,
      isShowing: !state.isShowing
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  employees,
  modal
});

export default rootReducer;
