// Initial State
const initialState = {
  count: 0
};

// Reducer Function
export default function reducer( state=initialState, action ) {

  // action: { type: 'FOO', payload: 77 }

  const { type, payload } = action;

  switch(type) {
    case 'INITIALIZE':
     return { count: parseInt(payload, 10) };
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default:
       return state;
  }

}


// Action Creator: A function that returns an action object

// initialize(10)
export const initialize = (number) => {
  return {
    type: 'INITIALIZE',
    payload: number
  }
}

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
