import React from 'react';

import Form from '../components/Form.js';
import Results from '../components/Results.js';
import History from '../components/History.js';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [
        {method:"GET", url:"http://john.com"},
        {method:"POST", url:"http://cathy.com"},
        {method:"PUT", url:"http://rosie.com"},
      ],
      results: {}
    };
  }

  fetch = async (formData) => {

    // TODO: Shouldn't be fake, but should come from the API
    let results = {
      headers: {
        authorization: "basic sldfjsdflj"
        },
      results: {
        count: 5,
        results: [{ foo:'bar'}, { biz:'bop'}]
      }
    }

    // TODO: probably want to save this in history
    // TOD: Save to local storage once we have the data
    // let history = [...this.state.history, {method:'DELETE', url:"http://foobar.com"}]
    this.setState({results});

    console.log("got called with", formData);
  }

  render() {
    return (
      <div className="homeWrapper">
        <Form handler={this.fetch} />
        <div className="homeOutput">
          <History history={this.state.history} />
          <Results data={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Home;
