import React from 'react';

import { BrowserRouter, MemoryRouter, HashRouter } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Main from './main';

import '../styles.scss';

// Try switching between BrowserRouter, MemoryRouter, HashRouter below
// Note how the url bar changes as you do that.

const App = props => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
