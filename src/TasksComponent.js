import React from 'react';
import TodoList from './TodoListComponent';
import './TasksComponent.css'

class TasksComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
  	return(
  		<div id="Tasks">
  		  <TodoList 
          items={this.props.items} 
          removeTodo={this.props.onRemove} 
          importance={this.props.importance}/>
  		  <input onChange={this.props.onDataChange} value={this.props.text}/>
          <div id='btns'>
	          <button onClick={this.props.onSubmit} id="add">
	            Add #{this.props.items.length + 1}
	          </button>
	          <button onClick={this.props.onDel} id="del">
	          	Deleted
	          </button>
            <select size = "1" id = "importance">
              <option value="0">Степень важности 1</option>
              <option value="1">Степень важности 2</option>
              <option value="2">Степень важности 3</option>
              <option value="3">Степень важности 4</option>
            </select>
          </div>
  		</div>
  	);
  }
}
export default TasksComponent;