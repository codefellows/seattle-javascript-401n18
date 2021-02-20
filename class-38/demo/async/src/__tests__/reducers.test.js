import reducer from '../store/reducers.js';

describe('Our Reducer', () => {
  it('does a GET right', () => {
    let initialState = {};

    let action = {
      type: 'GET',
      payload: { name: 'john' },
    };

    expect(reducer(initialState, action)).toEqual(action.payload);
  });
});
