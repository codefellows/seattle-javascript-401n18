import { createStore, combineReducers } from "redux";

import  {composeWithDevTools} from 'redux-devtools-extension';

import familyReducer from './family-store';
import petsReducer from './family-store';
import carsReducer from './family-store';

// later on, in a component, family here is: state.family...
const reducers = combineReducers({
  family: familyReducer,
  pets: petsReducer,
  cars: carsReducer,
})

const store = () => createStore(reducers, composeWithDevTools());

export default store(); // <== "singleton"
