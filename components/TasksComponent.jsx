import React from 'react';
import TodoList from './TodoList';
import './TasksComponent.css';
import ButtonsComponent from './ButtonsComponent.jsx';

class TasksComponent extends React.Component {
  /*constructor(props){
    super(props);
  }*/

  render() {
    return(
      <div id="Tasks">
  		  <TodoList 
          /*items={this.props.items} 
          removeTodo={this.props.onRemove}*//>
        <ButtonsComponent 
          /*submit={this.props.onSubmit} 
          delete={this.props.onDel}
          items={this.props.items}
          data={this.props.data}*//>
      </div>
  	);
  }
}

export default TasksComponent;