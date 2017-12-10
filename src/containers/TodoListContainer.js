import { connect } from 'react-redux';
import { delTodo } from '../actions';
import TodoListComponent from '../components/TodoListComponent.jsx';
import { getCurrentItems } from '../selectors/index.js';

const mapStateToProps = (state) => {
  return {
    todos: getCurrentItems(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id)=>{
      dispatch(delTodo(id))
    }
  }
}

const TodoListContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent)

export default TodoListContainer;