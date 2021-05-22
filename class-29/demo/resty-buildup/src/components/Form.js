import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      body: ''
    }
  }

  // TODO: Get the user's input
  // ... handle state
  handleChange = (e) => {
    this.setState( {...this.state, [e.target.name]: e.target.value} );
  }

  // TODO: Send that input back to the Home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handler( this.state );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="url" placeholder="http://..." onChange={this.handleChange} />
        </label>
        <label>
          <input type="radio" name="method" value="get" onChange={this.handleChange} />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" onChange={this.handleChange} />
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" onChange={this.handleChange} />
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete" onChange={this.handleChange} />
          <span>DELETE</span>
        </label>
        <label>
          <textarea name="body" onChange={this.handleChange}></textarea>
        </label>
        <button type="submit">GO</button>
      </form>
    );
  }
}

export default Form;
