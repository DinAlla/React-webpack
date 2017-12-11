import { connect } from 'react-redux';
import ButtonsComponent from '../components/ButtonsComponent.jsx';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return {
    data: state.importance.slice(0,4)
  }
}

const mapDispatchToProps = (dispatch) => {   
  return bindActionCreators({ Click: actions.addTodo }, dispatch);
}

const ButtonsContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsComponent)

export default ButtonsContainer;