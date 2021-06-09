import React, {useState} from 'react';

// import {Foobar} from 'site.js';
export const SiteContext = React.createContext();;

function Site(props) {

  const [title, setTitle] = useState('Class 401n18');
  const [type, setType] = useState('Nights and Weekends');

  const contextualState = {
    title,
    type,
    changeTitleTo: setTitle,
    changeTypeTo: setType
  }

  // Right now, this is <Main />
  return (
    <SiteContext.Provider value={contextualState}>
      {props.children}
    </SiteContext.Provider>
  )
}

// import WhateverIwantToCallIt from './site.js'
export default Site;
