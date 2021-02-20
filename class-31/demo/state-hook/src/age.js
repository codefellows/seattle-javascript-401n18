import React from 'react';
import { useState } from 'react';

function Age(props) {

  const [age, setAge] = useState(props.age || 0);

  // what happens if we just do this? Why?
  // setAge(props.age);

  // Or, we can just set it and forget it
  // setAge(55);

  // Can we just change it directly? Why do we need that function?
  // ++age;

  return (
    <div>
      <h2>{age}</h2>
    </div>
  );
}

export default Age;
