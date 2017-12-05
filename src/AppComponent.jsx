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
		    onDel = {this.handleDel}*//>
	  </div>
	);
  }
}

export default AppComponent