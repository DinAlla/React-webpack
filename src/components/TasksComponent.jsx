import React from 'react';
import TodoListContainer from '../containers/TodoListContainer.js';
import './TasksComponent.css';
import ButtonsContainer from '../containers/ButtonsContainer.js';

class TasksComponent extends React.Component {
  render() {
    return(
      <div id="Tasks">
  		  <TodoListContainer />
        <ButtonsContainer />
      </div>
  	);
  }
}

export default TasksComponent;