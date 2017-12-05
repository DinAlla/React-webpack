import { connect } from 'react-redux';
import { addTodo } from '../actions';
import ButtonsComponent from '../components/ButtonsComponent';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text, importance)=>{
      dispatch(addTodo(text, importance))
    }
  }
}

const ButtonsContainer  = connect(
  mapDispatchToProps
)(ButtonsComponent)

export default ButtonsContainer;