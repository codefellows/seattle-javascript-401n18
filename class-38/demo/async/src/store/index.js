import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Our custom written thunk...
import thunk from './middleware/thunk.js';

// The official thunk. Use this in production code
// import thunk from 'redux-thunk';

import reducer from './reducers.js';

let reducers = combineReducers({
  data: reducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
