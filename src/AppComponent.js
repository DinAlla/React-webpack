import React from 'react';
import TasksComponent from './TasksComponent';
import './AppComponent.css';

class AppComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
      	items: [],
      	importance: [],
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
  	const newItem = {
  		text: this.state.text,
  		id: Date.now()
  	};
  	let im = this.state.importance.concat(importance.options[importance.selectedIndex].value);
  	this.setState({
  		items: this.state.items.concat(newItem),
  		text: '',
  		importance: im
  	});
  }

  removeTodo(name){
  	let k;
  	let it = [];
  	this.state.items.forEach((el, i) => {
     	if (el == name) k = i; 
      	else it.push(el);
      });
    this.state.importance.splice(k, 1)
    this.setState({
    	items: it,
    	text: ''
    })
  }

  handleDel(e){
    this.state.items.pop();
    this.state.importance.pop();
  	this.setState({
  		items: this.state.items,
  		importance: this.state.importance
  	})
  }

  sortData(number){
    console.log("this.toWrite in sortData " + this.toWrite.items[0]);
    for(var i=0; i < this.toWrite.importance.length; i++){
      if(this.toWrite.importance[i] == number){
        this.toWrite.items.splice(i, 1);
        this.toWrite.importance.splice(i,1);
        this.toWrite.text = '';
      }
    }
  }

	render(){
    this.toWrite={
      items: this.state.items,
      importance: this.state.importance,
      text: this.state.text
    }
		return (
			<div>
        <div id='DegreeOfImportance'>
          <h3>Фильтры</h3>
          <ul>
            <li onClick={()=>{this.sortData("1")}}>Степень важности 1</li>
            <li>Степень важности 2</li>
            <li>Степень важности 3</li>
            <li>Степень важности 4</li>
            <li>Показать все</li>
          </ul>
        </div>
				<TasksComponent 
					items = {this.toWrite.items}
					text = {this.toWrite.text}
					importance = {this.toWrite.importance}
					onDataChange = {this.handleChange}
					onSubmit = {this.handleSubmit}
					onRemove = {this.removeTodo}
					onDel = {this.handleDel}/>
			</div>
		);
	}
}

export default AppComponent