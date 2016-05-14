import { createStore, applyMiddleware } from "redux";
// Thunk facilitates the use of async employeeActions
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk
    )
  );
}
