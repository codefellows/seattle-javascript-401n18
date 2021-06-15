import {connect} from 'react-redux';

import {vote, reset} from './store/votes';

function Votes(props) {

  function castVote(person) {
    // cast the vote in the store...
    // dispatch the vote action
    props.vote(person);
  }

  return (
    <>
      <h2>Election Card</h2>
        {
          props.candidates.map( candidate =>
            <h3 onClick={() => castVote(candidate.name)} key={candidate.name}>{candidate.name} - {candidate.votes}</h3>
          )
        }
        <button onClick={props.reset}>Reset Votes</button>
    </>
  )

}

const mapStateToProps = state => ({
  candidates: state.votes.candidates
});

const mapDispatchToProps = { vote, reset };


export default connect(mapStateToProps, mapDispatchToProps)(Votes);
