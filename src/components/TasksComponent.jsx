import React from 'react';
import TodoListComponent from '../containers/TodoListContainer.js';
import './TasksComponent.css';
import ButtonsComponent from '../containers/ButtonsContainer.js';

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