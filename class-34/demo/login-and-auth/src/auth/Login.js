import React, {useState, useContext, useReducer} from "react";

import {If, Then, Else} from 'react-if';

import {LoginContext} from './context.js';

function Login() {

  const [user, setUser] = useState({});
  const userContext = useContext(LoginContext);

  const handleChange = (e) => {
    setUser( {...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the user object to: context
    userContext.login(user);
  }


  return (
    <If condition={userContext.isLoggedIn}>
      <Then>
        <button onClick={userContext.logout}>Log Out</button>
      </Then>
      <Else>
        <form onSubmit={handleSubmit}>
          <input placeholder="username" name="username" onChange={handleChange} />
          <input name="password" type="password" onChange={handleChange} />
          <button>Login</button>
        </form>
      </Else>
    </If>
  )

}

export default Login;
