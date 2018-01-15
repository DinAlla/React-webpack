import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import LoginComponent from '../components/LoginComponent.jsx'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    userName: state.users.userName,
    isAuthenticated: state.users.isAuthenticated,
    isAuthenticating: state.users.isAuthenticating
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onLoginClick: actions.LoginUserRequest }, dispatch)
}

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent));

export default LoginContainer;