import React from 'react';
import { connect } from 'react-redux';

const Status = props => {

  let currentLeader = { name: 'No Leader', votes: 0 };

  let leader = props.candidates.reduce((winning, record) => {
    let r = record.votes > winning.votes ? record : winning
    console.log(r);
    return r;
  }, currentLeader);

  return (
    <section className="status">
      <span> Current Leader: {leader.name} </span>
      <span>Votes Cast: {props.votes.totalVotes}</span>
    </section>
  );
}

// We only care about one little bit of state in this component, for display only
const mapStateToProps = state => ({
  votes: state.votes,
  candidates: state.candidates
});

// Not doing any actions, so we'll not have to "mapDispatchToProps" here
export default connect(mapStateToProps)(Status);
