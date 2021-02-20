import React from 'react';
import { Provider } from 'react-redux';

import People from './components/people.js';
import './style.scss';

// New Way
import rtkStore from './store-rtk/';

// Old Way
import reduxStore from './store-redux/';

export default props => {
  return (
    <Provider store={reduxStore}>
      <People />
    </Provider>

  )
};
