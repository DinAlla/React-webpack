import React from 'react';
import TodoListComponent from './TodoListComponent.jsx';
import './TasksComponent.css';
import ButtonsComponent from './ButtonsComponent.jsx';

class TasksComponent extends React.Component {

  render() {
    return(
      <div id="Tasks">
  		  <TodoListComponent />
        <ButtonsComponent />
      </div>
  	);
  }
}

export default TasksComponent;