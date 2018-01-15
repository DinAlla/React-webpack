import { connect } from 'react-redux';
import ButtonsComponent from '../components/ButtonsComponent.jsx';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    data: state.reducer.importance.slice(0,4),
    name: state.users.userName
  }
}

const mapDispatchToProps = (dispatch) => {   
  return bindActionCreators({ Click: actions.addTodo }, dispatch);
}

const ButtonsContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonsComponent);

export default ButtonsContainer;