import {useState} from 'react';

import React from 'react';
import Head from '../components/head';
import Nav from '../components/nav';
import faker from 'faker';

const Words = (props) => {

  let [words, setWords] = useState('randoming');

  return (
    <>
      <Head title="Hacker words" />
      <Nav />
      <h2>{words}</h2>
      <button onClick={() => setWords( faker.hacker.ingverb() )}>New Hacker</button>
    </>
  );

};

export default Words;
