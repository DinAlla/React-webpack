import React from 'react';
import './HeaderComponent.css';
import LogoutContainer from '../containers/LogoutContainer.js';

class HeaderComponent extends React.Component {
  render() {
    return (
      <header>
        <LogoutContainer />
      </header>
    );
  }
}

export default HeaderComponent;