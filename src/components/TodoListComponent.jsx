import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

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
      <List >
        {todos.map((item, i) => (
          <ListItem 
            key={item.id}
            style={{
              display: 'inline-block',
              justifyContent: 'space-between ',
              fontFamily: 'Bradley Hand, cursive'
            }}
          >  
          <h3 style={{zIndex: '2'}}>&#9898; {item.text} &#166; Важность: { +item.importance + 1} &#166; Author: {item.name}
            <RaisedButton 
              onClick={()=>{this.removeItem(item.id, onTodoClick)}} 
              id="onli"
              style={{
                marginLeft: '100px',
                marginRight: '0',
                backgroundColor: '#7A8B8B'
              }}
            >Х</RaisedButton>
            </h3>
          </ListItem>
        ))
    	  }
      </List>
    );
  }
}

export default TodoListComponent;