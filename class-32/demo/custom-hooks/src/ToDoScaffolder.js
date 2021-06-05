import [useState, useEffect, useReducer} from 'react';
import useForm from './hooks/form.js';
import useRest from 'some-awesome-hook-i-found';
import { useEffect } from 'react';

function ToDo() {

  const [...] = useForm(addAnItem);

  function addAnItem(item) {
    // do the post to the API
  }

  function update(id) {
    // does a put
    // use a hook for this (useAxios or similar)
  }

  function remove(id) {
    // does a delete
    // use a hook for this (useAxios or similar)
  }

  useEffect( () => {
    // get the items from the api
    // use the hook to do this...
    // add them to state
  }, [])

  return (
    <>
    <form onSubmit={submitfromthehook}>
      <input onChange={changefromthehook} />
    </form>

    <ul>
      {
        state.items.map( item =>
          <li key={item.id}>
            <span onClick={ () => update(item.id) }>Complete</span>
            <span onClick={ () => remove(item.id) }>x</span>
            {item.name}
          </li>
        )
      }
    </ul>
    </>
  )


}
