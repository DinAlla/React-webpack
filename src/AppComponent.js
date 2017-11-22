import React from 'react';
import TasksComponent from './TasksComponent';
import './AppComponent.css';
import DegreeOfImportance from './DegreeOfImportanceComponent';

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
    this.sortData = this.sortData.bind(this);
	}

	handleChange(e){
  		this.setState({
  			text: e.target.value });
  }

  handleSubmit(e){
  	e.preventDefault();
  	if(!this.state.text.length){
  		return;
  	}
  	let importance = document.getElementById("importance");
  	let im = importance.options[importance.selectedIndex].value;
    const newItem = {
  		text: this.state.text,
  		id: Date.now(),
      importance: im// занести importance
  	};
  	this.setState({
  		items: this.state.items.concat(newItem),
  		text: ''
  	});
  }

  removeTodo(name){
  	let k;
  	let it = [];
  	this.state.items.forEach((el, i) => {
     	if (el == name) k = i; 
      	else it.push(el);
      });
    this.setState({
    	items: it,
    	text: ''
    });
  }

  handleDel(e){
    this.state.items.pop();
  	this.setState({
  		items: this.state.items
  	})
  }

  sortData(number){
    console.log('number= ' + number);
    for(var i=0; i < this.toWrite.items.length; i++){
      console.log('this.toWrite.items.importance in sortData' + this.this.toWrite.items.importance);
      if(this.toWrite.items.importance == number){
        data.splice(i, 1);
        data.text = '';
      }
    }
  }

	render(){
		return (
			<div>
        <DegreeOfImportance sortData={this.sortData} items={this.state.items}/>
				<TasksComponent 
					items = {this.toWrite.items}
					text = {this.toWrite.text}
					onDataChange = {this.handleChange}
					onSubmit = {this.handleSubmit}
					onRemove = {this.removeTodo}
					onDel = {this.handleDel}/>
			</div>
		);
	}
}

export default AppComponent