import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import todoReducer from './todo';

import loggerMiddleware from './middleware/logger.js';
import thunk from './middleware/thunk.js';

let reducers = combineReducers({
  todo: todoReducer
})

const store = () =>
  createStore(reducers, composeWithDevTools( applyMiddleware(loggerMiddleware, thunk)) );

export default store();
