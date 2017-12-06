import { connect } from 'react-redux';
import { delTodo } from '../actions';
import TodoListComponent from '../components/TodoListComponent.jsx';

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
)(TodoListComponent)

export default TodoListContainer;