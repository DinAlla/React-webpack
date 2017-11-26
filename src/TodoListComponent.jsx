import React from 'react';
import './TodoListComponent.css'

class TodoListComponent extends React.Component {
  constructor(props){
    super(props);
  }
  removeItem(e) {
    this.props.removeTodo(e);
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={item.id}>{item.text} Важность: { +item.importance + 1}<button onClick={()=>{this.removeItem(item)}} id="onli">Х</button></li>
        ))
    	  }
      </ul>
    );
  }
}

export default TodoListComponent;