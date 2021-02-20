import React from 'react';

import './app.scss';

const Header = () => {
  return (
    <header>
      <h1>New header</h1>
    </header>
  );
};

const Footer = () => <footer>&copy; 2018 Code Fellows</footer>;

class Main extends React.Component {
  constructor(props) {
    super(props);
    let params = new URL(document.location).searchParams;
    this.state = {
      words: params.words || 'nothing to see here',
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');
    this.setState({ words });
  };

  render() {
    return (
      <div>
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
