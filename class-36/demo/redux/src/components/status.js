import React from 'react';
import { connect } from 'react-redux';

const Status = props => {

  return (
    <section className="status">
      {props.totalVotes}
    </section>
  );
}

// We only care about one little bit of state in this component, for display only
const mapStateToProps = state => ({
  totalVotes: state.counter.totalVotes,
});

// Not doing any actions, so we'll not have to "mapDispatchToProps" here
export default connect(mapStateToProps)(Status);
