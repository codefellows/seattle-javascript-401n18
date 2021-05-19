import React from 'react';

import axios from 'axios';

import List from './list.js'
import If from './components/if.js';

class Pokemon extends React.Component {

  // Happens 1st
  constructor(props) {
    super(props);
    console.log('constructing....')
    this.state = {
      title: "Fetching...",
      creatures: []
    }
  }

  // Only happens after the FIRST render
  async componentDidMount() {
    console.log('mounted ...');
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    this.setState({ ...this.state, title: 'Got the Pokemon List!', creatures: response.data.results})
  }

  // Happens after every subsequent render
  componentDidUpdate() {
    console.log('updated');
  }

  // Happens second and then after any setState
  render() {

    const creatures = this.state.creatures.map((creature, idx) =>
      <li key={idx}>{creature.name}</li>
    );

    return (
      <div>
        <h2>{this.state.title}</h2>

        <If condition={this.state.creatures.length > 10}>
          <h3>Wow!</h3>
        </If>

        <If condition={this.state.creatures.length < 10}>
          <h3>Boring</h3>
        </If>

        <List>
          {creatures}
        </List>
      </div>
    )
  }

}

export default Pokemon;
