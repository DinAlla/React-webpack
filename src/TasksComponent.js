import React from 'react';
import TodoList from './TodoListComponent';
import './TasksComponent.css'

class TasksComponent extends React.Component {
  constructor(props){
    super(props);
    this.sortData = this.sortData.bind(this);
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

  render() {
    this.toWrite={
      items: this.props.items,
      importance: this.props.importance,
      text: this.props.text
    }
   	return(
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
      <div id="Tasks">
  		  <TodoList 
          items={this.toWrite.items} 
          removeTodo={this.props.onRemove} 
          importance={this.toWrite.importance}/>
  		  <input onChange={this.props.onDataChange} value={this.props.text}/>
          <div id='btns'>
	          <button onClick={this.props.onSubmit} id="add">
	            Add #{this.props.items.length + 1}
	          </button>
	          <button onClick={this.props.onDel} id="del">
	          	Deleted
	          </button>
            <select size = "1" id = "importance" required>
              <option value="0">Степень важности 1</option>
              <option value="1">Степень важности 2</option>
              <option value="2">Степень важности 3</option>
              <option value="3">Степень важности 4</option>
            </select>
          </div>
      </div>
      </div>
  	);
  }
}
export default TasksComponent;