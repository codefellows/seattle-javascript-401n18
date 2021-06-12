import './site.scss';

import LoginContext from './auth/context.js';
import Content from './Content.js';
import Login from './auth/Login.js';

function App() {
  return (
    <LoginContext>
       <h1>Login/Auth Demo</h1>
       <Login />
       <hr />
       <Content />
    </LoginContext>
  );
}

export default App;
