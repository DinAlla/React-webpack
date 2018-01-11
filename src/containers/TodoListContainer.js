import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import TodoListComponent from '../components/TodoListComponent.jsx';
import { getCurrentItems } from '../selectors/index.js';

const mapStateToProps = (state) => {
  return {
    todos: getCurrentItems(state.todos)
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({onTodoClick: actions.delTodo}, dispatch)
}

const TodoListContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent)

export default TodoListContainer;