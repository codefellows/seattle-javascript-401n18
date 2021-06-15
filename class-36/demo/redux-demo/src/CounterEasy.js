import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement, initialize} from "./store/counter.js";
// import * as actions from "./store/counter.js"; // actions.increment


function Counter(props) {

  const dispatch = useDispatch();
  const count = useSelector( (state) => state.counter.count )

  function addOne() {
    dispatch( increment() )
  }

  function subtractOne() {
    dispatch( decrement() )
  }

  useEffect( () => {
    dispatch( initialize(100) )
  },[])

  return (
    <>
      <h2>EZ Counter: {count}</h2>
      <button onClick={subtractOne}>-</button>
      <button onClick={addOne}>+</button>
    </>
  )

}

export default Counter;
