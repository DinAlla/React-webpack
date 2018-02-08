import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HeaderComponent from '../components/HeaderComponent.jsx'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    name: state.users.userName,
    isAuthenticated: state.users.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({Click: actions.LogoutUser}, dispatch)
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default HeaderContainer;