import superagent from 'superagent';

let api = 'https://api-js401.herokuapp.com/api/v1/teams';

// What happens when you just try and run an async action without thunk?
// export const getRemoteData = () => {
//   return superagent.get(api)
//     .then(response => {
//       return {
//         type: 'GET',
//         payload: response.body
//       }
//     });
// }

// Exported action for components to dispatch
// It uses the thunk pattern, currying a function that
// takes a dispatch methods as a param
export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(response => {
      dispatch(getAction(response.body));
    });
};

// Here's another version of the above, using the async/await pattern
// Notice that we're making the curried function async, not the outer function
// Very nice and readable!

// export const getRemoteData = () => async dispatch => {
//   let response = await superagent.get(api);
//   dispatch(getAction(response.body));
// };

export const putRemoteData = (id, data) => async dispatch => {
  let url = `${api}/${id}`
  let response = await superagent.put(url).send(data);
  console.log(response.body);
  // dispatch(getAction(record));
};

// Actual action creator function
// Notice that we aren't exporting this ...
// This can only be dispatchd by the async action above
export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};