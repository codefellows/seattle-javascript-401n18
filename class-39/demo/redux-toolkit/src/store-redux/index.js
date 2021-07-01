import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

import people from './people.store.js';

let reducers = combineReducers({ people });

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

  export default store();
