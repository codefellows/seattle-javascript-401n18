import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import superagent from 'superagent';

import * as actions from './store/actions.js';

const App = (props) => {

  const fetchData = (e) => {
    e && e.preventDefault();

    // Do this ourselves here in the component. This is async, but not "reduxified"
    // superagent.get('https://api-js401.herokuapp.com/api/v1/teams')
    //   .then(response => response.body)
    //   .then(props.get);

    // Better - Just use the async action
    props.get();
  };

  // Using useEffect, we can fetch the API call at initial render instead of using
  // the button in the JSX to force the API data to load manually

  useEffect(() => {
    fetchData()
  }, []);

  const updateTeam = (e, team) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let name = formData.get('name');
    let id = formData.get('id');
    props.put(id, { name });
  }

  return (
    <>
      <button onClick={fetchData}>Get Teams</button>

      {/* {props.data.results.map((record, idx) => (
        <div key={idx}>
          {record.name}
        </div>
      ))} */}

      {props.data.results.map((record, idx) => (
        <form key={idx} onSubmit={(e) => updateTeam(e, record)}>
          <input name="name" defaultValue={record.name} />
          <input type="hidden" name="id" defaultValue={record._id} />
        </form>
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch, getState) => ({
  // Loaded directly here and then sent to reducer...
  // get: (records) => dispatch(actions.getAction(records)),

  // Better: Async Action
  get: () => dispatch(actions.getRemoteData()),

  put: (id, data) => dispatch(actions.putRemoteData(id, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
