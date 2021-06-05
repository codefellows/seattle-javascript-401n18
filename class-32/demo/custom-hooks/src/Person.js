import React, {useState} from 'react';

import useForm from './hooks/form.js';

function Person() {

  const [handleSubmit, handleChange, formData] = useForm(saveThePersonToTheAPI);

  function saveThePersonToTheAPI(person) {
    console.log(person);
  }

  return (

    <div>
      <h2>Person: {formData.fullName} - {formData.email}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Your Name" name="fullName" onChange={handleChange} />
        <input placeholder="Your Email" name="email" onChange={handleChange} />
        <button type="submit">Add the Person</button>
      </form>
    </div>

  )
}

export default Person;
