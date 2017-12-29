import React from 'react';

class TodoListComponent extends React.Component {
  constructor(props){
    super(props);
  }
 
  removeItem(item, onTodoClick) {
    onTodoClick(item);
  }

  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <ul>
        {todos.map((item, i) => (
          <li key={item.id}>{item.text} Важность: { +item.importance + 1}<button onClick={()=>{this.removeItem(item.id, onTodoClick)}} id="onli">Х</button></li>
        ))
    	  }
      </ul>
    );
  }
}

export default TodoListComponent;