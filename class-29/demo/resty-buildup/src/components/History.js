import React from 'react';

class History extends React.Component {

  // TODO: Tell the "Home" component that you clicked on one
  // Then ... the Home component needs to tell the Form component new values for the form
  render() {
    return (
      <aside>
        {this.props.history.map( entry =>
          <div key={entry.url}>
            <span>{entry.method}</span>
            <span> | </span>
            <span>{entry.url}</span>
          </div>
        )}
      </aside>
    );
  }
}

export default History;
