import React from 'react';

class Age extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: this.props.age
    }
  }

  changeAge = () => {
    let age = this.state.age + 1;
    this.setState({age})
  }

  render() {
    return (
      <>
        <h2>Age is: {this.state.age}</h2>
        <button onClick={this.changeAge}>Change Age</button>
      </>
    )
  }

}

export default Age;

/*
  let age = new Age({props:{age:50}});
  virtualDom.Update(age.render())
*/
