import React from 'react';
import TodoList from './TodoListComponent';
import './TasksComponent.css';
import ButtonsComponent from './ButtonsComponent';

class TasksComponent extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log("this.props.items in TasksComponent " + this.props.items);
   	this.state={
      items: this.props.items,
      text: this.props.text
    }
    return(
      <div id="Tasks">
  		  <TodoList 
          items={this.state.items} 
          removeTodo={this.state.onRemove}/>
        <ButtonsComponent 
          onDataChange={this.props.onDataChange} 
          value={this.props.text} 
          submit={this.props.onSubmit} 
          delete={this.props.onDel}
          items={this.props.items}/>
      </div>
  	);
  }
}
export default TasksComponent;