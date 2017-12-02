import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick})=>(
  <ul>
    {todos.map( todo =>
      <Todo 
        key={todo.id}
        {...todo.text}
        onClick={()=>onTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.data.isRequired,
      text: PropTypes.string.isRequired
  }).isRequired).isRequired, 
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;