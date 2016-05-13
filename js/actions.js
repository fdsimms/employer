import fetch from "isomorphic-fetch";
import faker from "faker";

export const REQUEST_EMPLOYEES = "REQUEST_EMPLOYEES";
export const RECEIVE_EMPLOYEES = "RECEIVE_EMPLOYEES";
export const RECEIVE_EMPLOYEE = "RECEIVE_EMPLOYEE";

function requestEmployees() {
  return {
    type: REQUEST_EMPLOYEES
  };
}

function receiveEmployee(json) {
  return {
    type: RECEIVE_EMPLOYEE,
    employee: json
  };
}

function receiveEmployees() {
  return {
    type: RECEIVE_EMPLOYEES,
    isFetching: false,
    receivedAt: Date.now()
  };
}

function fetchEmployee() {
  return (dispatch, getState) => {
    return fetch("http://uifaces.com/api/v1/random")
      .then(response => {
        return response.json();
      }).then(json => {
        let employee = {
          imageUrl: json.image_urls.epic,
          name: faker.fake("{{name.firstName}} {{name.lastName}}"),
          job: faker.name.jobType()
        };
        dispatch(receiveEmployee(employee));
      }).then(() => {
        if (getState().employees.items.length == 10) {
          dispatch(receiveEmployees());
        }
      });
  };
}

function fetchEmployees() {
  return (dispatch) => {
    dispatch(requestEmployees());
    for (let i = 0; i < 10; i++) {
      dispatch(fetchEmployee());
    }
  };
}

function shouldFetchEmployees(state) {
  const { items } = state.employees;
  return items.length == 0;
}

export function fetchEmployeesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchEmployees(getState())) {
      return dispatch(fetchEmployees(getState));
    }
  };
}
