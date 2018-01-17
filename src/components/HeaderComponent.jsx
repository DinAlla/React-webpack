import React from 'react';
import './HeaderComponent.css';
import LogoutContainer from '../containers/LogoutContainer.js';

class HeaderComponent extends React.Component {

  render() {
    return (
      <header>
      {
        this.props.isAuthenticated === true
        ? <LogoutContainer />
        : null
      }
      </header>
    );
  }
}

export default HeaderComponent;