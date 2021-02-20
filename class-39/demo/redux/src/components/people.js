import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// Original Actions
import { add, remove, get } from '../store-redux/people.store.js';

// Redux Toolkit Actions
// import { add, remove, get } from '../store-rtk/people.store.js';

const People = props => {

  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(name);
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  useEffect(() => {
    props.get();
  }, []);

  return (
    <section>
      <ul>
        {props.people.map(person =>
          <li onClick={() => props.remove(person.name)} key={person.name}>{person.name}</li>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
      </form>
    </section>
  );
}

// No changes here. RTK and Redux work the same
const mapStateToProps = state => ({
  people: state.people,
});

const mapDispatchToProps = { add, remove, get };

export default connect(mapStateToProps, mapDispatchToProps)(People);
