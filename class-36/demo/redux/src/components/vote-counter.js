import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, reset } from '../store/votes.js';

const VotesCounter = props => {

  return (
    <section className="counter">
      <ul>
        {props.counter.candidates.map(person =>
          <li onClick={() => props.increment(person.name)} key={person.name}>{person.name} : {person.votes}</li>
        )}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
}

const mapStateToProps = state => ({
  counter: state.counter,
});

// When defining mapDispatchToProps as a simple object, connect() automatically maps
// these as dispatch functions that accept parameters for you.
const mapDispatchToProps = { increment, decrement, reset };

/*
but you might see it like this ...
const mapDispatchToProps = ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset()),
})
*/

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
