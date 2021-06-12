import React, { useState, useEffect } from 'react';

import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import superagent from 'superagent';

export const LoginContext = React.createContext();

function LoginProvider(props) {

  // A toggle that says if you are logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This is going to be the user record from the API
  const [user, setUser] = useState({});

  const validateToken = (token) => {
    try {
      const tokenUser = jwt.verify(  token, process.env.REACT_APP_SECRET)
      setIsLoggedIn(true);
      setUser(tokenUser);
      cookie.save('auth', token);
    } catch(e) {
      setUser({});
      setIsLoggedIn(false);
      console.warn('Token Validation Error', e)
    }
  }

  const logout = () => {
   setUser({});
   setIsLoggedIn(false);
   cookie.remove('auth');
  }

  const can = (permission) => {
    return user.capabilities && user.capabilities.includes(permission);
  }

  const login = async (input) => {
    const API = `${process.env.REACT_APP_API}/signin`;
    try {
      const response = await superagent.post(API)
        .auth( input.username, input.password );

        const {token} = response.body;

        validateToken(token);

    } catch(e) {
      console.warn('Login Attempt Failed')
    }
  }

  useEffect( () => {
    const token = cookie.load('auth') || null;
    validateToken(token);
  }, [])

  const sharedThings = {
    login,
    logout,
    can,
    user,
    isLoggedIn
  };

  return (
    <LoginContext.Provider value={sharedThings}>
      {props.children}
    </LoginContext.Provider>
  )

}

export default LoginProvider;
