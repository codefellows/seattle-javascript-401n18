import React from 'react';

import Footer from './footer/footer.js';

class Header extends React.Component {
  render() {
    return (
      <h1>This is the react version...</h1>
    );
  }
}

// let something = new Header();
// let output = something.render();
// output goes into #root

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      words: "Type Something..."
    };
  }

  handleIncrement = () => {
    // this.state.clicks++;
    let clicks = this.state.clicks + 1;
    this.setState({clicks});
    // this.setState({ ...state, clicks:clicks })
  }

  handleChangeInput = (e) => {
    this.setState(
      {...this.state, words: e.target.value}
    )
    // this could have been:
    // let words = e.target.value;
    // this.setState({words})
  }

  render() {
    return (
      <>
        <Header />
        <div>
          {this.state.words}
          <div>
            <input type="text" onChange={this.handleChangeInput} />
          </div>
        </div>
        <div>
          {this.state.clicks}

          <button onClick={this.handleIncrement}>+</button>
        </div>
        <Footer />
      </>
    );
  }

}

export default App;
