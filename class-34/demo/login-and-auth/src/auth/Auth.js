import React, {useContext} from 'react';
import {LoginContext} from './context.js';
import {When} from 'react-if';

function Auth(props) {

  const userContext = useContext(LoginContext)

  const canDoThing = props.capability ? userContext.can(props.capability) : true ;

  const okToRender = userContext.isLoggedIn && canDoThing;

  return (
    <When condition={okToRender}>
      {props.children}
    </When>
  )

}

export default Auth;
