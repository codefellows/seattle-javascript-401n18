import React, { useEffect, useState } from 'react';

function People(props) {

  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');

  const _changeName = (e) => {
    setName(e.target.value);
  }

  const _addPerson = (e) => {
    e.preventDefault();
    e.target.reset();
    name && setPeople([...people, name])
  }

  // This runs on EVERY re-render of this component
  useEffect(() => {
    console.log('I RUN ON EVERY RE-RENDER');
  });

  // This runs only when the name changes
  useEffect(() => {
    console.log('NAME CHANGED TO:', name);
  }, [name])

  // This runs only when the form is submitted (name added)
  useEffect(() => {
    console.log('PERSON ADDED');
    if (people.length >= 1) { document.title = `Welcome, ${name}!`; }
  }, [people]);

  // This runs only once on the initial rendering
  useEffect(() => {
    console.log('INITIAL MOUNT');
    document.title = `People ...`;
  }, []);

  // This effect has a cleanup (componentDidUnmount) ... this could be in any of the
  // above examples, but lets look at it in isolation

  useEffect(() => {
    return (() => {
      console.log('COMPONENT UNMOUNTED');
    })
  })

  return (
    <div>
      <form onSubmit={_addPerson}>
        <input onChange={_changeName} />
      </form>
      {
        people.map(person =>
          <p key={person}>{person}</p>
        )
      }
    </div>
  )

}

export default People;