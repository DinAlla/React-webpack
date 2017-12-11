import { connect } from 'react-redux';
import ButtonsComponent from '../components/ButtonsComponent.jsx';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {   
  return {
    Click: (text, importance) => {
      bindActionCreators(actions.addTodo(text, importance), dispatch);
    }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.importance.slice(0,4)
  }
}

const ButtonsContainer  = connect(
  mapDispatchToProps,
  mapStateToProps
)(ButtonsComponent)

export default ButtonsContainer;