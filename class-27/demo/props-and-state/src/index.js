import React from 'react';
import ReactDOM from 'react-dom';

import App from './app-number.js';
// import App from './app-star-wars.js';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
