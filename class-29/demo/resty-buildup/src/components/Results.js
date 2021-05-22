import React from 'react';

import ReactJson from 'react-json-view'

class Results extends React.Component {

  render() {
    return (
      <ReactJson src={this.props.data} />
    );
  }
}

export default Results;
