import React from 'react';

class Food extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      values: {}
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({ values: { ...this.state.values, [e.target.name]: e.target.value } })
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="food" type="text" onChange={this.handleChange} placeholder="Food Name" />
          <input name="calories" type="number" onChange={this.handleChange} placeholder="Calories" />
          <button>Eat Food</button>
        </form>

        <hr />

        <strong>Here are the values from state. Notice how they change as we go</strong>
        {
          Object.keys(this.state.values).map((key) => <p key={Math.random()}>{key} - {this.state.values[key]}</p>)
        }

      </div>
    );
  }
}

export default Food;
