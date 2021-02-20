/*
  Reducer Unit Tests:

  When testing reducers, we are testing only that
  when the reducers are invoked that they affect
  state in the appropriate manner.

  Reducers are called with current state and an action object
  and are expected to return the next state. This
  makes testing them very much like any other function in javascript
*/

import reducer from '../store/counter.js';

describe('Counter Reducer', () => {
  it('should return the initial state', () => {
    let initialState = {
      count: 0,
      polarity: null,
    };
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INCREMENT', () => {
    expect(
      reducer(undefined, {
        type: 'INCREMENT',
      })
    ).toEqual({
      count: 1,
      polarity: 'positive',
    });
  });

  it('should handle DECREMENT', () => {
    expect(
      reducer(undefined, {
        type: 'DECREMENT',
      })
    ).toEqual({
      count: -1,
      polarity: 'negative',
    });
  });

  it('should handle RESET', () => {
    expect(
      reducer(undefined, {
        type: 'RESET',
      })
    ).toEqual({
      count: 0,
      polarity: null,
    });
  });
});
