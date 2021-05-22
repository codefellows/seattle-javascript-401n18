import React from 'react';

class History extends React.Component {

  render() {
    return (
      <aside>
        {this.props.history.map( entry =>
          <div key={entry.url}>
            <span>{entry.method}</span>
            <span>{entry.url}</span>
          </div>
        )}
      </aside>
    );
  }
}

export default History;
