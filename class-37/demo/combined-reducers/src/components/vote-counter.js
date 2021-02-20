import React from 'react';
import { connect } from 'react-redux';

import { increment, disable, reset } from '../store/candidates.js';

const VotesCounter = props => {

  return (
    <section className="counter">
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
            <th>PCT</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map(person =>
            <tr
              className={person.disabled ? 'disabled' : ''}
              onDoubleClick={() => props.disable(person)}
              onClick={() => person.disabled ? {} : props.increment(person)} key={person}
            >
              <td>{person.name}</td>
              <td>{person.votes}</td>
              <td>{person.votes ? ((person.votes / props.votes.totalVotes) * 100).toFixed(2) + '%' : '0%'}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
}

const mapStateToProps = state => ({
  candidates: state.candidates,
  votes: state.votes,
});

// When defining mapDispatchToProps as a simple object, connect() automatically maps
// these as dispatch functions that accept parameters for you.
const mapDispatchToProps = { increment, disable, reset };

/*
but you might see it like this ...
const mapDispatchToProps = ({
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset()),
})
*/

// Instead of exporing our component, export it after it's been connected to the Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
