import {useState} from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  function handleChange(e) {
    e.persist();
    let name = e.target.name;
    let value = e.target.value;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    callback(values);
  }

  return [handleSubmit, handleChange, values];

}

export default useForm;
