import React from 'react';

class History extends React.Component {

  // TODO: Tell the "Home" component that you clicked on one
  // this.props.transfer is the method to call ...
  // Then ... the Home component needs to tell the Form component new values for the form
  render() {
    return (
      <aside>
        {this.props.history.map( (entry,idx) =>
          <div className="history" key={entry.url} onClick={() => this.props.transfer(entry)}>
            <span className="method">{entry.method}</span>
            <span className="url">{entry.url}</span>
          </div>
        )}
      </aside>
    );
  }
}

export default History;
