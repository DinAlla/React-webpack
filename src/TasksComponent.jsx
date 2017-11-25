import React from 'react';
import TodoList from './TodoListComponent.jsx';
import './TasksComponent.css';
import ButtonsComponent from './ButtonsComponent.jsx';

class TasksComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("this.props.items in TasksComponent " + this.props.items);
    return(
      <div id="Tasks">
  		  <TodoList 
          items={this.props.items} 
          removeTodo={this.props.onRemove}/>
        <ButtonsComponent 
          submit={this.props.onSubmit} 
          delete={this.props.onDel}
          items={this.props.items}/>
      </div>
  	);
  }
}
export default TasksComponent;