/*import React, { PropTypes } from 'react';

const TodoListComponent = ({todos, onTodoClick})=>(
  <ul>
    {todos.map((item, i) => (
      <li key={item.id}>{item.text} Важность: { +item.importance + 1}<button onClick={onTodoClick()} id="onli">Х</button></li>
    ))
}
</ul>
)

export default TodoListComponent;
*/
import React from 'react';

class TodoListComponent extends React.Component {
  constructor(props){
    super(props);
  }
  removeItem(e, onTodoClick) {
    onTodoClick(e)
  }

  render() {
    const {todos, onTodoClick} = this.props;
    return (
      <ul>
        {todos.map((item, i) => (
          <li key={item.id}>{item.text} Важность: { +item.importance + 1}<button onClick={()=>{this.removeItem(item, onTodoClick)}} id="onli">Х</button></li>
        ))
    	  }
      </ul>
    );
  }
}

export default TodoListComponent;