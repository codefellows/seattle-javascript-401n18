import React from 'react';

import {BrowserRouter, Route} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Help from './pages/Help';

import './design.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/help">
            <Help />
          </Route>
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
