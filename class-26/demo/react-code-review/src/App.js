import React from 'react';

import Footer from './footer/footer.js';

import './App.css';

// NOTE:
// this.setState() always takes in what is to become the NEXT state

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
      words: "Type Something...",
      formValues: {}
    };
  }

  handleIncrement = () => {
    // this.state.clicks++;
    let clicks = this.state.clicks + 1;
    this.setState({clicks});
    // this.setState({ ...state, clicks:clicks })
  }

  handleChangeInput = (e) => {
    let fieldName = e.target.name;
    let value = e.target.value;
    let formValues = { ...this.state.formValues, [fieldName]: value}
    this.setState( {formValues} );

    // superagent.post('/api/person').send(this.state.formValues)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState( {...this.state, words: this.state.formValues.words} )
  }

  render() {
    return (
      <>
        <Header />
        <h2>{this.state.words}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="words" onChange={this.handleChangeInput} />
          </div>
          <div>
            <input type="text" name="city" onChange={this.handleChangeInput} />
          </div>
          <div>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff"  value="TV" />
              <span>TV</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff" value="Guitar" />
              <span>Guitar</span>
            </label>
            <label>
              <input onChange={this.handleChangeInput} type="radio" name="stuff" value="Skull Thing" />
              <span>Skull Thing</span>
            </label>
          </div>

          <button>Do the thing</button>
        </form>
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
