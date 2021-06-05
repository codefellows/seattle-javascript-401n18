import './App.css';

import Counter from './Counter.js';
import CounterWithReducer from './CounterWithReucer.js';
import Person from './Person.js';
import ContactUs from './Contact';

function App() {
  return (
    <div className="App">
      <Person />
      <hr />
      <ContactUs />
      <hr />
      <Counter start={50} />
      <hr />
      <CounterWithReducer start={100} />
    </div>
  );
}

export default App;
