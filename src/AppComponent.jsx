import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './AppComponent.css';
import DegreeOfImportance from './DegreeOfImportanceComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx'

class AppComponent extends React.Component{
  constructor(props){
	super(props);
	  this.state = {
        items: [],
        toWrite: []
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
      items: this.state.items.concat(newItem),
      toWrite: this.state.items.concat(newItem)
  	});
  }

  removeTodo(name){
  	let schetchick;
  	let massivForImp = [];
  	let result = this.state.items.filter((el) => el != name);
    this.setState({
      items: result,
      toWrite: result
    });
  }

  handleDel(e){
    this.state.items.pop();
  	this.setState({
      items: this.state.items,
      toWrite: this.state.items
  	})
  }

  sortData(number) {
    this.setState({
      toWrite: this.state.items
    });
    let result;
    (number != 4) ? result = this.state.items.filter((el) => el.importance == number) : result = this.state.items;
    this.setState({
      toWrite: result
    });
  }

  render(){
    return (
	  <div>
        <HeaderComponent />
        <DegreeOfImportance sortData={this.sortData} />
        <TasksComponent
          items={this.state.toWrite}
		  onSubmit = {this.handleSubmit}
		  onRemove = {this.removeTodo}
		  onDel = {this.handleDel}/>
	  </div>
	);
  }
}

export default AppComponent