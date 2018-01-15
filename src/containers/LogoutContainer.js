import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import LogoutComponent from '../components/LogoutComponent.jsx';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    name: state.users.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({Click: actions.LogoutUser}, dispatch)
}

const LogoutContainer  = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogoutComponent);

export default LogoutContainer;