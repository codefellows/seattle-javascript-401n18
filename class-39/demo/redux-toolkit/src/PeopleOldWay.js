import React, {useState, useEffect} from "react";
import {connect} from 'react-redux';

// Older version actoins
// import * as actions from './store-redux/people.store.js';

import * as actions from './store-rtk/people.store.js';

function People(props) {
  const [name,setName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    props.add(name);
  }

  useEffect( () => {
    props.get();
  }, [])

  return (
    <>
    <form onSubmit={addPerson}>
      <input onChange={ (e) => {e.preventDefault(); setName(e.target.value)} } placeholder="New Person" />
    </form>
    <ul>
      {
        props.people.map( person =>
          <li
            key={person.name}
            onClick={() => props.remove(person.name)}
          >{person.name}</li>
        )
      }
    </ul>
    </>
  )
}

const mapStateToProps = state =>  ({
  // This will become props.people to our component once we connect
  people: state.people
});

const mapDispatchToProps = {
  add: actions.add,
  remove: actions.remove,
  get: actions.get
};

export default connect(mapStateToProps, mapDispatchToProps)(People);
