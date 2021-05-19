import React from 'react';

class List extends React.Component {

  render() {
    return (
      <ul>
        {this.props.children}
      </ul>
    );
  }

}

export default List;
