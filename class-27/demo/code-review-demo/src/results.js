import React from 'react';

class Results extends React.Component {

  // instead of looping and doing lists ... you should be using JSON Pretty Component to just dump the JSON
  render() {
    return (
      <>
      <h2>All the output from an API</h2>
      <ul>
        {
          this.props.list.map( (item,idx) =>
            <li data-testid={`item-${idx}`} key={idx}>{item.text}</li>
          )
        }
      </ul>
      </>
    )
  }

}

export default Results;
