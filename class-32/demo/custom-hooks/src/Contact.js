import React, {useState} from 'react';

function Person() {

  const [formData, setFormData] = useState({});

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData( {...formData, [name]:value} );
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData); // Send to an API
  }

  return (

    <div>
      <h2>You Are: {formData.fullName} - {formData.email}</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Your Name" name="fullName" onChange={handleChange} />
        <input placeholder="Your Email" name="email" onChange={handleChange} />
        <input placeholder="Phone Number" name="phone" onChange={handleChange} />
        <button type="submit">Subscribe</button>
      </form>
    </div>

  )
}

export default Person;
