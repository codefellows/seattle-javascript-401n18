let initialState = [
  { name: 'Mary' },
  { name: 'Bob' },
  { name: 'Jamie' },
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':
      return [...state, { name: payload }];

    case 'REMOVE':
      return state.filter(person => person.name !== payload);

    default:
      return state;
  }
};

export const add = (name) => {
  return {
    type: 'ADD',
    payload: name
  };
};

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload: name
  };
};

export const get = () => async dispatch => {
  const response = await fetch('https://swapi.co/api/people');
  const people = await response.json();
  people.results.forEach(person => dispatch(add(person.name)))
}
