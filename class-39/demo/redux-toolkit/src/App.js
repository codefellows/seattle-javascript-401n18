import React from 'react';
import {Provider} from 'react-redux';

// import reduxClassicStore from './store-redux';
// import People from './PeopleOldWay';

import reduxToolkitStore from './store-rtk';
import People from './PeopleToolkit';

function App(prop) {

  return (
    <Provider store={reduxToolkitStore}>
      <h2>People App</h2>
      <People />
    </Provider>
  )

}

export default App;
