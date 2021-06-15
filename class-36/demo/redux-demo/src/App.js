
import {Provider} from 'react-redux';
import CounterEasy from "./CounterEasy.js";
import Votes from "./Votes.js";
import TotalVotes from "./TotalVotes.js";
import store from './store/';

function App() {
  return (
    <Provider store={store}>
      <CounterEasy />
      <TotalVotes />
      <Votes />
    </Provider>
  );
}

export default App;
