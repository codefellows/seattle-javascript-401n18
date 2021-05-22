import React from 'react';

import axios from 'axios';
import Form from '../components/Form.js';
import Results from '../components/Results.js';
import History from '../components/History.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [],
      results: {},
      url: '',
      method:'',
    };
  }

  fetch = async (formData) => {

    const method = formData.method || "get";
    const url = formData.url;
    const body = formData.body || {};

    const response = await axios({
      method: method,
      url: url,
      body: body
    });

    const results = response.data;

    const entry = {
      method: formData.method,
      url: formData.url,
      data: results
    }
    const history = [...this.state.history, entry ];

    localStorage.setItem('history', JSON.stringify(history));

    this.setState({results, history});
  }

  transferHistory = (entry) => {
    this.setState({ ...this.state, url: entry.url, method:entry.method})
  }

  componentDidMount() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    this.setState({history})
  }

  render() {
    return (
      <div className="homeWrapper">
        <Form key={this.state.url} url={this.state.url} method={this.state.method} handler={this.fetch} />
        <div className="homeOutput">
          <History transfer={this.transferHistory} history={this.state.history} />
          <Results data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Home;
