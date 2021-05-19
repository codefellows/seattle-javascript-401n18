import React from 'react';
import './design/App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Pokemon from './pokemon.js'
import Home from './home.js'
import Nav from './nav/nav.js'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/pokemon">
         <Pokemon />
         </Route>
      </Router>
    )
  }
}

export default App;
