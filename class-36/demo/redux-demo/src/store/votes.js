// Initial State
const initialState = {
  candidates: [
    { name: "Mary", votes: 0 },
    { name: "Murray", votes: 0 },
    { name: "Rhoda", votes: 0 },
  ],
  totalVotes: 0,
  staff: [],
  money: 1,
};

// Reducer

export default function reducer (state=initialState, action) {

  const {type, payload} = action;

  switch(type) {
    case 'VOTE':
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map( candidate => {
        if( candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        }
        return candidate;
      });
      return { totalVotes, candidates }
    case 'RESET':
      return initialState;
    default:
      return state;
  }

}

// Action Creators

export const vote = (name) => {
  return {
    type: 'VOTE',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}
