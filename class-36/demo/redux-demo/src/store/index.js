import { createStore, combineReducers } from "redux";

// Turns on an extension in the browser for you to see state change
import { composeWithDevTools } from "redux-devtools-extension";

import counter from "./counter.js";
import votes from "./votes.js";

// 99% of react/redux apps have many reducers
const reducers = combineReducers( {counter, votes} );
/*
  reducers:
    counter: counter (that came from the file as an export),
    votes: votes

  state = {
    counter = { count: 0 },
    votes = { candidates: [], totalVotes: 0 }
  }
*/

const store = () => {
  return createStore(reducers, composeWithDevTools() );
}

export default store();
