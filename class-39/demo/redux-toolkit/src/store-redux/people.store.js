const initialState = [
  {name:'Mary'},
  {name:'Joseph'},
  {name:'Paul'}
];

export default function reducer( state = initialState, action ) {
  // action will be: { type: 'FOO', payload:17 }
  const {type, payload} = action;

  switch (type) {
    case 'ADD':
      return [...state, {name: payload}];
    case 'REMOVE':
      return state.filter( person => person.name !== payload );
    default:
      return state;
  };
}

export const add = (name) => {
  return {
    type: 'ADD',
    payload: name
  };
};

export const remove = (name) => {
  return {
    type: 'REMOVE',
    payload: name,
  };
};

export const get = () => async (dispatch) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const people = await response.json();
  people.results.forEach(person => dispatch(add(person.name)))
}
