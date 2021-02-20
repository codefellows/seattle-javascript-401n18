import React from 'react';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleNewNumber = (number) => {
    this.setState({ number });
  };

  render() {
    return (
      <>
        <Number show={this.state.number} />
        <NumberForm updateNumber={this.handleNewNumber} />
      </>
    );
  }
}

function Number(props) {
  return (
    <h1 data-testid="output">{props.show}</h1>
  )
}

function NumberForm(props) {

  const _handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  }

  const _handleChange = (e) => {
    props.updateNumber(e.target.value);
  }

  return (
    <form onSubmit={_handleSubmit}>
      <input data-testid="num" type="number" onChange={_handleChange} placeholder="0" />
    </form>
  )
}

export default App;
