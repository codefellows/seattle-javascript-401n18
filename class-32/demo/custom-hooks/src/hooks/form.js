import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  // Version 1 (typical input handling pattern)
  // This is a raw function that handles an event.
  // Users would use it this way: <input onChange={handleChange} />
  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  }

  // Version 2: encapsulated input handling
  // This is the event handler wraped in an object.
  // Users would use it this way: <input {...handleInput} />
  // {handleInput} spreads into the onChange function shown below
  const handleInput = {
    onChange: (event) => {
      event.persist();
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    }
  }

  return [
    handleSubmit,
    handleInput,
    handleChange,
    values,
  ];
};

export default useForm;
