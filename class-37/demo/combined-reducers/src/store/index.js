import { createStore, combineReducers } from 'redux';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import candidates from './candidates.js';
import votes from './votes.js';

let reducers = combineReducers({ candidates, votes });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();
