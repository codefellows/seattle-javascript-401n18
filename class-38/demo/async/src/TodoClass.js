import React from 'react';
import {connect} from 'react-redux';

import {get} from './store/todo';

class Todo extends React.Component {

  getTodoItems = async () => {
    this.props.getToDoItems();
  }

  render() {
    console.log(this.props);

    return (
      <>
        <h1>To Do List ({this.props.count})</h1>
        <button onClick={this.getTodoItems}>Get List</button>
        <ul>
        {
          this.props.items.map ( (item,idx) =>
            <li key={idx}>{item.text}</li>
          )
        }
        </ul>
      </>
    )
  }
}

const mapStateToProps = state => ({
  // todo: state.todo
  count: state.todo.count,
  items: state.todo.results
});

const mapDispatchToProps = (dispatch) => ({
  getToDoItems: () => dispatch(get())
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
