import React from 'react';

import axios from 'axios';

class Pokemon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      creatures: []
    }
  }

  fetchData = async () => {
    let url = 'https://pokeapi.co/api/v2/pokemon';
    let response = await axios.get(url);
    let creatures = response.data.results;
    this.setState({creatures})
  }

  render() {
    return (
      <>
      <div>
        <button onClick={this.fetchData}>Get The Creatures</button>
      </div>
      <div>
        <h2>Creatures ...</h2>
        <ul>
          {
            this.state.creatures.map( (creature,idx) =>
              <li>
                <a href={creature.url}>{creature.name}</a>
              </li>
            )
          }
        </ul>
      </div>
      </>
    )
  }

}

export default Pokemon;
