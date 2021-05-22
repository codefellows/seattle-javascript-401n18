import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      method: this.props.method,
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
          <input name="url" value={this.state.url} onChange={this.handleChange} />
        </label>
        <label>
          <input type="radio" name="method" value="get" checked={this.state.method === "get"} onChange={this.handleChange} />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" checked={this.state.method==="post"} onChange={this.handleChange} />
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" checked={this.state.method==="put"} onChange={this.handleChange} />
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete" checked={this.state.method==="delete"} onChange={this.handleChange} />
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
