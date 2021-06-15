import {connect} from 'react-redux';

function TotalVotes(props) {

  return (
    <>
      <h2>Total Votes: {props.totalVotes}</h2>
    </>
  )

}

const mapStateToProps = state => ({
  totalVotes: state.votes.totalVotes
});

export default connect(mapStateToProps)(TotalVotes);
