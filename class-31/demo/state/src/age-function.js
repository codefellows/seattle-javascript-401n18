import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
// useReducer is another way

function Age(props) {

  const [age, setAge] = useState(props.age);
  const [smiling, setSmiling] = useState(false);

  const changeAge = () => {
    setAge(age + 1);
  }

  const changeExpression = () => {
    setSmiling( ! smiling );
  }

  // simulate componentDidMount --- runs only once, on the first one
  useEffect( () => {
    // great time to fetch data that we need to draw the component
    console.log('ONLY ONCE!');
  }, [])

  // simulate componentDidUpdate ... every render this is going to happen
  useEffect(() => {
    console.log('I run every time the component renders itself');
  });

  // setup a watcher for the "age" variable and run whenever that changes and only that changes!
  // it'd be cool if we could instantly run a API call whenever the URL changes
  useEffect( () => {
    if(age > 50) {
      console.log('I run when people are old');
    }
  }, [age]);

  // Kinda does what the first one does ...
  useEffect(runOnEither, [age,smiling]);

  function runOnEither() {
    console.log('I run on either age or facial changes');
  }

  // simulate componentDidUnmount() -- will run right before the next render cycle starts (ie. when we "re-fire" the component)
  useEffect( () => {
    return () => console.log('GOOD BYE')
  })

  return (
    <>
      <h2>Age is: {age}, and am I happy about it? {smiling.toString()}</h2>
      <Button onClick={changeAge}>Change Age</Button>
      <Button onClick={changeExpression}>Change Expression</Button>
    </>
  )

;

}

export default Age;

/*
  virtualDomUpdate( Age(34) );
  {age} is actually getAge()
*/
