import React from 'react';
import './TodoListComponent.css'

class TodoListComponent extends React.Component {
  removeItem(e) {
    this.props.props.onRemove(e);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}<button onClick={()=>{this.removeItem(item)}} id="onli">Х</button></li>
        ))
    	  }
      </ul>
    );
  }
}

export default TodoListComponent;