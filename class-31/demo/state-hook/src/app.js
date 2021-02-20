import React from 'react';

import Age from './age.js';
import HooksCounter from './hooks-counter.js';

function App() {
  return (
    <div>
      <Age age="15" />
      <Age age="25" />
      <Age age="30" />
      <HooksCounter />
    </div>
  );
}

export default App;
