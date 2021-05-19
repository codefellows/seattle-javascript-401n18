import React from 'react';
import axios from 'axios';

import Form from './form.js';
import Results from './results.js';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [
        { text:"Do stuff" },
        {text: "Read a book"}
      ]
    }
  }

  fetchData = async (options) => {

    const response = await axios({
      method: options.method || "get",
      url: options.url,
      data: options.body && JSON.parse(options.body)
    });

    const results = response.data.results;
    this.setState({results});
  }

  render() {
    return (
      <>
        <h1>Search Stuff</h1>
        <Form handler={this.fetchData} />
        <Results list={this.state.results} />
      </>
    )
  }

}

export default App;
