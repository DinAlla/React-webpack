import React from 'react';
import TasksComponent from './TasksComponent.jsx';
import './AppComponent.css';
import DegreeOfImportance from './DegreeOfImportanceComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx'

class AppComponent extends React.Component{
  /*constructor(props){
	super(props);
	  this.state = {
        items: [],
        toWrite: [],
        importance: 
          [{
            value:'0',
            message: 'Степень важности 1'
          },
          {
            value:'1',
            message: 'Степень важности 2'
          },
          {
            value:'2',
            message: 'Степень важности 3'
          },
          {
            value:'3',
            message: 'Степень важности 4'
          },
          {
            value:'4',
            message: 'Показать все'
          }]
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
    let data = this.state.items.concat(newItem);
  	this.setState({
      items: data,
      toWrite: data
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
    let data = this.state.items;    
  	this.setState({
      items: data,
      toWrite: data
  	})
  }

  sortData(number) {
    let result = (number != 4) ?  this.state.items.filter((el) => el.importance == number) : this.state.items;
    this.setState({
      toWrite: result
    });
  }*/

  render(){
    return (
	  <div>
      <HeaderComponent />
      <DegreeOfImportance /*sortData={this.sortData} data={this.state.importance}*/ />
      <TasksComponent
        /*data={this.state.importance.slice(0,4)}
        items={this.state.toWrite}
		    onSubmit = {this.handleSubmit}
		    onRemove = {this.removeTodo}
		    onDel = {this.handleDel}*/ />
	  </div>
	);
  }
}

export default AppComponent