import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import HeaderComponent from '../components/HeaderComponent.jsx'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users.isAuthenticated
  }
}

const HeaderContainer = connect(
  mapStateToProps
)(HeaderComponent);

export default HeaderContainer;