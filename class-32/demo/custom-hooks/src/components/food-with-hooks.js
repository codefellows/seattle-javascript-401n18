import React, { useState } from 'react';
import useForm from '../hooks/form.js';

function Food(props) {

  const [formData, setFormData] = useState({});
  const [handleSubmit, handleInput, handleChange, values] = useForm(eat);

  // A function that we can use to handle the form submissions (gets values)
  function eat(food) {
    setFormData(food);
  }

  return (
    <div>
      <h2>Hooks Component</h2>
      <form onSubmit={handleSubmit}>
        <input name="food" type="text" {...handleInput} placeholder="Food Name" />
        <input name="calories" type="number" onChange={handleChange} placeholder="Calories" />
        <button>Eat Food</button>
      </form>

      <hr />

      <strong>Here are the values from the form hook. Notice how they change as we go</strong>
      {
        Object.keys(values).map((key) => <p key={Math.random()}>{key} - {values[key]}</p>)
      }

      <hr />

      <strong>Here is the values from the form AFTER it is submitted</strong>
      {
        Object.keys(formData).map((key) => <p key={Math.random()}>{key} - {formData[key]}</p>)
      }
    </div>


  );
}

export default Food;
