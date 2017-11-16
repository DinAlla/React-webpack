import React from 'react';
import DegreeOfImportanceComponent from './DegreeOfImportanceComponent';
import TasksComponent from './TasksComponent';
import './AppComponent.css';

class AppComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      		items: [],
      		text: ''
    	};
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleDel = this.handleDel.bind(this);
    	this.removeTodo = this.removeTodo.bind(this);
	}

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
        	items: this.state.items.filter(el => el !== name),
        	text: ''
    	})
  	}

  	handleDel(e){
    	this.state.items.pop();
  		this.setState({
  			items: this.state.items
  		}
  		);
  	}

	render(){
		return (
			<div>
				<DegreeOfImportanceComponent />
				<TasksComponent 
					items = {this.state.items}
					text = {this.state.text}
					onDataChange = {this.handleChange}
					onSubmit = {this.handleSubmit}
					onRemove = {this.removeTodo}
					onDel = {this.handleDel}/>
			</div>
		);
	}
}

export default AppComponent