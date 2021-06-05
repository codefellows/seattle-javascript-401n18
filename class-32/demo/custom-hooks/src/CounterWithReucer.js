import React, {useReducer} from 'react';

import {logger} from './library/utilities.js';

const initialState = { count: 0 };

/*
  action should be an object
  .. should have a "type" property that's just a word that says what to do
  .. could also have a "payload" propert that has some data in it

  dispatch an action
    - tell the reducer hook, the name of the action you want to perform
    - in the switch, perform that action, by matching up the name
*/
const reducer = (state, action ) => {

  // If the action is:  { type: 'increment' }
  const {type} = action;

  logger('In the reducer...');

  switch( type ) {
    case 'increment':
      return {...state, count: state.count + 1};
    case 'decrement':
      return {...state, count: state.count - 1};
    case 'reset':
      return initialState;
    default:
      return initialState
  }

}

function Counter({start}) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const decrement = () => {

    const action = {
      type: 'increment'
    };

    dispatch(action);

  }

  const increment = () => {

    const action = {
      type: 'increment'
    };

    dispatch(action);

  }

  const remove = (e, id) => {
    console.log(e.target,id);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
      <div><button onClick={ () => dispatch( {type: 'reset'}) }>Reset</button></div>

      {
        [1,2,3,4,5].map( (value,idx) =>
          <li key={idx} onClick={(event) => remove(event, idx)}>{value}</li>
        )
      }

    </>
  )

}

export default Counter;
