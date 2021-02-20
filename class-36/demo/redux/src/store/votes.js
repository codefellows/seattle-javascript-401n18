let initialState = {
  candidates: [
    { name: 'Mary', votes: 0 },
    { name: 'Bob', votes: 0 },
    { name: 'Jamie', votes: 0 },
  ],
  totalVotes: 0,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':

      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          // Why return a new object here instead of just updating in place?
          // Hint: pass by ...
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      });

      console.log('i', initialState);

      // Or you can do this the shredder way ... which you'll often see in live code bases
      // let candidates = state.candidates.map(candidate => candidate.name == payload ? { ...candidate, votes: candidate.votes + 1 } : candidate);

      return { totalVotes, candidates };

    case 'RESET':
      console.log(initialState);
      return initialState;

    default:
      return state;
  }
};

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name
  };
};

export const decrement = (name) => {
  return {
    type: 'DECREMENT',
    payload: name
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};

