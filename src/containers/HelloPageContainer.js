import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HelloPageComponent from '../component/HelloPageComponent.jsx'
  
const mapDispatchToProps = (dispatch) => {   
  return bindActionCreators({ onLoginClick: actions.LoginUserRequest }, dispatch);
}

const mapStateToProps = (state) => ({
  token: state.users.token,
  userName: state.users.userName,
  isAuthenticated: state.users.isAuthenticated
})

return connect(mapStateToProps)(HelloPageComponent);
  
export default HelloPageContainer;