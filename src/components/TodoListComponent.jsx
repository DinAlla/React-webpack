import React, { PropTypes } from 'react';
import TodoComponent from './TodoComponent.jsx';

const TodoListComponent = ({todos, onTodoClick})=>(
  <ul>
    { todos.map( todo =>
      <TodoComponent 
        key={todo.id}
        {...todos}
        onClick={()=>onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoListComponent;