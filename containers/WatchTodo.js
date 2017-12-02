import { connect } from 'react-redux';
import { delTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id)=>{
            dispatch(delTodo(id))
        }
    }
}

const WatchTodo  = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default WatchTodo;