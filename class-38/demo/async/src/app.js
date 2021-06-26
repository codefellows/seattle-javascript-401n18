import {Provider} from 'react-redux';
import store from './store';

import Todo from './Todo.js';
import TodoClass from './TodoClass.js';

function App() {
  return (
    <Provider store={store}>
      <Todo />
      <hr />
      <TodoClass />
    </Provider>
  );
}

export default App;
