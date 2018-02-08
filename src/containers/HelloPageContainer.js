import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HelloPageComponent from '../components/HelloPageComponent.jsx'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
    userName: state.users.userName,
    isAuthenticated: state.users.isAuthenticated,
    isAuthenticating: state.users.isAuthenticating
  }
}

const HelloPageContainer = withRouter(connect(
  mapStateToProps
)(HelloPageComponent));

export default HelloPageContainer;