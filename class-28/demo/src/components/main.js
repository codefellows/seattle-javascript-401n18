import React from 'react';
import superagent from 'superagent';

import List from './list';
import Home from './home.js';

class Main extends React.Component {

  constructor(props) {
    super(props);

    // Start with a hard-coded list.
    // When changing to componentDidMount, this should be an empty array
    // that is filled by the API call
    // this.state = {
    //   items: [
    //     { name: 'George' },
    //     { name: 'Betsy' }
    //   ]
    // }

    this.state = { items: [] }
  }

  // Component Lifecycle ... when does this run?
  async componentDidMount() {
    let response = await superagent.get('https://pokeapi.co/api/v2/pokemon');
    this.setState({ items: response.body.results })
  }

  render() {

    // Create a set of sub-components that the <List/> will render as children
    let items = this.state.items.map((person, i) => <li key={i}>{person.name}</li>);

    return (
      <main>
        <Home />
        <List>{items}</List>
      </main>
    );
  }
}

export default Main;
