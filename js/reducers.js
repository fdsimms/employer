import { combineReducers } from "redux";
import { REQUEST_EMPLOYEES, RECEIVE_EMPLOYEES, RECEIVE_EMPLOYEE } from "./actions";

function employees(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
  case REQUEST_EMPLOYEES:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_EMPLOYEE:
    let newItems = state.items.slice();
    newItems.push(action.employee);

    return Object.assign({}, state, {
      isFetching: true,
      items: newItems
    });
  case RECEIVE_EMPLOYEES:
    return Object.assign({}, state, {
      isFetching: false,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  employees
});

export default rootReducer;
