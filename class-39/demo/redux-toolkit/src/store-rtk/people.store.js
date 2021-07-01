import {createSlice} from '@reduxjs/toolkit';

const peopleSlice = createSlice({

  name: 'people',
  initialState: [
    { name: 'Peter' },
    {name: 'Paul' },
    {name: 'Mary' }
  ],
  reducers: {
    add( state, action ) {
      state.push( {name: action.payload })
    },
    remove( state, action) {
      return state.filter( person => person.name !== action.payload )
    }
  }

});

export const {add, remove} = peopleSlice.actions;

export const get = () => async (dispatch) => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
  const people = await response.json();
  people.results.forEach(person => dispatch(add(person.name)))
}

export default peopleSlice.reducer;
