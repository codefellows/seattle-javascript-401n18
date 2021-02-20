import React, { useState } from 'react';

function Food() {

  const [values, setValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h2>Function Component</h2>
      <form onSubmit={handleSubmit}>
        <input name="food" type="text" onChange={handleChange} placeholder="Food Name" />
        <input name="calories" type="number" onChange={handleChange} placeholder="Calories" />
        <button>Eat Food</button>
      </form>

      <hr />

      <strong>Here are the values from state. Notice how they change as we go</strong>
      {
        Object.keys(values).map((key) => <p key={Math.random()}>{key} - {values[key]}</p>)
      }

    </div>
  );
}

export default Food;
