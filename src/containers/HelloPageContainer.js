import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HelloPageComponent from '../components/HelloPageComponent.jsx'

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    userName: state.users.userName,
    isAuthenticated: state.users.isAuthenticated,
    isAuthenticating: state.users.isAuthenticating
  }
}

const HelloPageContainer = connect(
  mapStateToProps
)(HelloPageComponent)

export default HelloPageContainer;