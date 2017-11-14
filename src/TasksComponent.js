import React from 'react';
import TodoList from './TodoListComponent';
import './TasksComponent.css'

class TasksComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  };

  handleChange(e){
  	this.setState({text: e.target.value });
  }

  handleSubmit(e){
  	e.preventDefault();
  	if(!this.state.text.length){
  		return;
  	}
  	const newItem = {
  		text: this.state.text,
  		id: Date.now()
  	};
  	this.setState({
  		items: this.state.items.concat(newItem),
  		text: ''
  	});
  }

  removeTodo(name){
    this.setState({
        items: this.state.items.filter(el => el !== name)
    })
  }

  handleDel(e){
    this.state.items.pop();
  	this.setState({
  		items: this.state.items
  	}
  	);
  }

  render() {
  	return(
  		<div id="Tasks">
  		  <TodoList items={this.state.items} removeTodo={this.removeTodo}/>
  		  <input onChange={this.handleChange} value={this.state.text}/>
          <div id='btns'>
	          <button onClick={this.handleSubmit} id="add">
	            Add #{this.state.items.length + 1}
	          </button>
	          <button onClick={this.handleDel} id="del">
	          	Deleted
	          </button>
          </div>
  		</div>
  	);
  }
}
export default TasksComponent;