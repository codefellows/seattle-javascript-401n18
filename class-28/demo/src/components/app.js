import React from 'react';

import Header from './header';
import Footer from './footer';
import Main from './main';

import '../styles.scss';

const App = props => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;
