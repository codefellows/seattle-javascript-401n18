import React from 'react';

import Results from '../components/Results.js';
import History from '../components/History.js';

class HistoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [],
      results: {}
    };
  }

  transferHistory = (entry) => {
    this.setState({ ...this.state, results: entry.data})
  }

  componentDidMount() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    this.setState({history})
  }

  render() {
    return (
      <div className="homeWrapper">
        <div className="homeOutput">
          <History transfer={this.transferHistory} history={this.state.history} />
          <Results data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default HistoryPage;
