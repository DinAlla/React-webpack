import React from 'react';
import './TodoListComponent.css'

class TodoListComponent extends React.Component {
  removeItem(e) {
    this.props.removeTodo(e);
  }

  render() {
    let importance = [];
    return (
      <ul>
        {this.props.items.map((item, i) => (
          <li key={item.id}>{item.text} Важность: { +this.props.importance[i] + 1}<button onClick={()=>{this.removeItem(item)}} id="onli">Х</button></li>
        ))
    	  }
      </ul>
    );
  }
}

export default TodoListComponent;