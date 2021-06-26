const axios = require('axios');

const initialState = {
  count: 1,
  results: [{
    complete: false,
    text: 'Sample Item',
    difficulty: 2,
    assignee: 'Nobody'
  }]
}

export default function reducer ( state = initialState, action ) {
  const {type, payload} = action;
  switch(type) {
    case 'GET':
      return payload;
    default:
      return state;
  }
}

// this won't work, redux wants a POJO for the action, or a thunk'd action creator for async
// export async function get() {

//   const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
//   const data = response.data;
//   console.log('Got Data', data);

//   return {
//     type: 'GET',
//     payload: data
//   }
// }


export const get = () => async dispatch => {
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
  const data = response.data;
  dispatch( actualGet(data) );
}

function actualGet(data) {
  return {
    type: 'GET',
    payload: data
  }
}
