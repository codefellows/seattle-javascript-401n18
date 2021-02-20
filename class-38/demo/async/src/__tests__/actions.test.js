import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import * as actions from '../store/actions.js';

const mockStore = configMockStore([thunk]);

describe('async Action Creator', () => {
  it('should create a GET action', () => {
    const store = mockStore({ results: [] });
    return store.dispatch(actions.getRemoteData()).then(() => {
      let dispatchedActions = store.getActions();
      expect(dispatchedActions[0].type).toEqual('GET');
    });
  });
});
