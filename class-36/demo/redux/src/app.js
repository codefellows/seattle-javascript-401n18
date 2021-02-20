import React from 'react';

import Votes from './components/vote-counter.js';
import Status from './components/status.js';

import './style.scss';

export default props => {
  return (
    <>
      <Votes />
      <Status />
    </>
  )
};
