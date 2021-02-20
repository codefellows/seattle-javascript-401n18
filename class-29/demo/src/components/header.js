import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = props => {
  // <Link /> and <NavLink /> are similar but different ...
  return (
    <header>
      <h1>Routing and Composition!</h1>
      <nav>
        <ul>
          <li>
            <Link data-testid="homelink" to="/">Home</Link>
          </li>
          <li>
            <NavLink data-testid="classiclink" activeClassName="here" to="/stuff">Stuff</NavLink>
          </li>
          <li>
            <NavLink data-testid="renderlink" activeClassName="here" to="/render-stuff">Stuff (via render())</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
