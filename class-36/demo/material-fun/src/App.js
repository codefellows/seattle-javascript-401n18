import {Provider} from 'react-redux';
import Header from './Header.js';
import Family from './Family.js';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <Family />
      </main>
    </Provider>
  );
}

export default App;
