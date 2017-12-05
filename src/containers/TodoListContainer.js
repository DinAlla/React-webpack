import { connect } from 'react-redux';
import { delTodo } from '../actions';
import TodoList from '../components/TodoListComponent';

const mapStateToProps = (state) => {
    return {
        items: state.toWrite
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
)(TodoList)

export default TodoListContainer;