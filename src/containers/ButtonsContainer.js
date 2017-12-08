import { connect } from 'react-redux';
import { addTodo } from '../actions';
import ButtonsComponent from '../components/ButtonsComponent.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text, importance)=>{
      dispatch(addTodo(text, importance))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.importance
  }
}

const ButtonsContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsComponent)

export default ButtonsContainer;