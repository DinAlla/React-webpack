import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './AppComponent.css';
import DegreeOfImportance from './DegreeOfImportanceComponent.jsx';

class AppComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      items: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.sortData = this.sortData.bind(this);
	}

  handleSubmit(text, importance){
    const newItem = {
  		text: text,
  		id: Date.now(),
      importance: importance
  	};
  	this.setState({
  		items: this.state.items.concat(newItem)
  	});
  }

  removeTodo(name){
  	let schetchick;
  	let massivForImp = [];
  	this.state.items.forEach((el, i) => {
     	if (el == name) schetchick = i; 
      	else massivForImp.push(el);
      });
    this.setState({
    	items: massivForImp
    });
  }

  handleDel(e){
    this.state.items.pop();
  	this.setState({
  		items: this.state.items
  	})
  }

  sortData(number){
    for(var i=0; i < this.toWrite.items.length; i++){
      if(this.toWrite.items.importance == number){
        data.splice(i, 1);
        data.text = '';
      }
    }
  }

	render(){
		return (
			<div>
        <DegreeOfImportance />
				<TasksComponent 
					items = {this.state.items}
					onSubmit = {this.handleSubmit}
					onRemove = {this.removeTodo}
					onDel = {this.handleDel}/>
			</div>
		);
	}
}

export default AppComponent