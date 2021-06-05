import React, {useState} from 'react';

import {logger} from './library/utilities';

  // this could have been (props) and then used later as props.start
  // Desctructuring makes it easier to see
function Counter({start}) {

  const [count, setCount] = useState(start);

  const increment = () => {
    logger('increment is about to happen');
    setCount(count + 1);
  }

  const decrement = () => {
    setCount( count - 1);
  }

  const reset = () => {
    setCount(start);
  }

  return (
    <>
      <button data-testid="counter-decrement-button" onClick={decrement}>-</button>
      <span data-testid="counter-value">{count}</span>
      <button data-testid="counter-increment-button" onClick={increment}>+</button>
      <div><button data-testid="counter-reset-button" onClick={reset}>Reset</button></div>
    </>
  )

}

export default Counter;
