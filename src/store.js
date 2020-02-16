import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(logger))
);

export default store;
