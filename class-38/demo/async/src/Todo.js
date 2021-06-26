import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {get} from './store/todo';

function Todo(props) {

  const dispatch = useDispatch();
  const count = useSelector( state => state.todo.count)
  const items = useSelector( state => state.todo.results)

  async function getTodoItems() {
    dispatch(get());
  }

  useEffect( () => {
    // dispatch(get());
  }, []);

  return (
    <>
      <h1>To Do List ({count})</h1>
      <button onClick={getTodoItems}>Get List</button>
      <ul>
      {
        items.map ( (item,idx) =>
          <li key={idx}>{item.text}</li>
        )
      }
      </ul>
    </>
  )

}

export default Todo;
