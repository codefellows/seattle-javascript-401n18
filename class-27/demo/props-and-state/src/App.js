import React from 'react';

import Zach from './components/zach.js';
import Allie from './components/allie.js';
import Pokemon from './components/pokemon.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      balance: 1000
    }
  }

  fakeWithdraw = (amount) => {
  }

  withdraw = (amount) => {
    if(amount <= 50) {
      this.setState({...this.state, balance: this.state.balance - amount})
    }
  }

  render() {
    return (
      <div>
        <h1>Bank Balance: {this.state.balance}</h1>
        <hr />
        <Zach food="cookies" useAtmCard={this.withdraw} />
        <hr />
        <Allie food="trail mix" useAtmCard={this.fakeWithdraw} />
        <hr />
        <Pokemon />
      </div>
    )
  }

}

export default App;
