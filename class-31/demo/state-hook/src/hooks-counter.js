import React from 'react';
import { useState } from 'react';

function App() {

  // Manage our internal state with 2 state values.
  // could this also be done with one state variable that's an object?
  // i.e. const[state, setState] = useState({count:0,factorOfFive:false})
  const [clicks, setClicks] = useState(0);
  const [factorOfFive, setFactorOfFive] = useState(false);

  const updateCounters = () => {
    let newCount = clicks + 1; // what happens if you try to do something like newCount = ++clicks; ??
    setClicks(newCount); // Set with a calculated value

    // Why are setting this using newCount instead of clicks? (hint: async)
    setFactorOfFive(newCount > 0 && newCount % 5 === 0); // set it while calculating the value in place.
  };

  return (
    <div>
      <h2>Button has been clicked {clicks} time(s)</h2>
      <h2>Factor of Five? {factorOfFive.toString()}</h2>
      <button type="button" onClick={updateCounters}>
        Update Clicks
      </button>
    </div>
  );
}

export default App;
