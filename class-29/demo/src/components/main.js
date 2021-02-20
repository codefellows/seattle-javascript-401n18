import React from 'react';
import { Route, Switch } from 'react-router-dom';

import List from './list';
import Home from './home.js';

const Main = props => {
  let stuff = ['water', 'soda', 'milk', 'coffee', 'tea'];
  let items = stuff.map((item, i) => <li key={i}>{item}</li>);

  // The "links" in the navbar correspond to these routes
  // the clicked link shows
  // they can be declared as wrapped children or

  // Alternatively, without exact, you could have multiple routes match (you may want that behavior)
  // Using <Switch /> to wrap your routes ensures that only one matches
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/render-stuff" render={() => <List>{items}</List>} />
        <Route path="/stuff">
          <List>{items}</List>
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
    </main >
  );
};

export default Main;
