import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HelloPageComponent from '../components/HelloPageComponent.jsx'

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    userName: state.users.userName,
    isAuthenticated: state.users.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ onLoginClick: actions.LoginUserRequest }, dispatch)
}

const HelloPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloPageComponent)

export default HelloPageContainer;