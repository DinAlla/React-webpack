import { connect } from 'react-redux';
import ButtonsComponent from '../components/ButtonsComponent';
import { sortTodo } from '../actions/actions';

const mapDispatchToProps = (state) => {
  return {
    data: state.importance
  }
}

const mapStateToProps = (dispatch) => {
  return {
    sortData: (number)=>{
      dispatch(sortTodo(number))            
    }
  }
}

const ButtonsContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsComponent)

export default ButtonsContainer;