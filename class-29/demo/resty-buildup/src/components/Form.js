import React from 'react';

class App extends React.Component {

  // TODO: Get the user's input
  // ... handle state

  // TODO: Send that input back to the Home
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handler();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name="url" placeholder="http://..." />
        </label>
        <label>
          <input type="radio" name="method" value="get" />
          <span>GET</span>
        </label>
        <label>
          <input type="radio" name="method" value="post" />
          <span>POST</span>
        </label>
        <label>
          <input type="radio" name="method" value="put" />
          <span>PUT</span>
        </label>
        <label>
          <input type="radio" name="method" value="delete" />
          <span>DELETE</span>
        </label>
        <label>
          <textarea name="body"></textarea>
        </label>
        <button type="submit">GO</button>
      </form>
    );
  }
}

export default App;
