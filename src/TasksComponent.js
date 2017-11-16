import React from 'react';
import TodoList from './TodoListComponent';
import './TasksComponent.css'

class TasksComponent extends React.Component {
  render() {
  	return(
  		<div id="Tasks">
  		  <TodoList items={this.props.items} removeTodo={this.props.onRemove}/>
  		  <input onChange={this.props.onDataChange} value={this.props.text}/>
          <div id='btns'>
	          <button onClick={this.props.onSubmit} id="add">
	            Add #{this.props.items.length + 1}
	          </button>
	          <button onClick={this.props.onDel} id="del">
	          	Deleted
	          </button>
          </div>
  		</div>
  	);
  }
}
export default TasksComponent;