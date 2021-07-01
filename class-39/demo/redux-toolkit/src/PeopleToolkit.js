import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// Older version actoins
// import * as actions from './store-redux/people.store.js';

import * as actions from './store-rtk/people.store.js';

function People(props) {

  const dispatch = useDispatch();
  const people = useSelector( state => state.people )
  const [name,setName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    dispatch( actions.add(name) );
  }

  useEffect( () => {
    dispatch( actions.get() );
  }, [])

  return (
    <>
    <form onSubmit={addPerson}>
      <input onChange={ (e) => {e.preventDefault(); setName(e.target.value)} } placeholder="New Person" />
    </form>
    <ul>
      {
        people.map( person =>
          <li
            key={person.name}
            onClick={() => dispatch(actions.remove(person.name))}
          >{person.name}</li>
        )
      }
    </ul>
    </>
  )
}

export default People;
