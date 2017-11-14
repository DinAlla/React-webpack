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

  handleDel(e){
  	this.setState({
  		items: this.state.items.splice(/*...*/)
  	}
  	);
  }

  render() {
  	return(
  		<div id="Tasks">
  		  <TodoList items={this.state.items}/>
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