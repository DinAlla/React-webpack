import React from 'react';
import './HeaderComponent.css';
import HeaderContainer from '../containers/HeaderContainer.js';

class HelloPageComponent extends React.Component {
  render() {
    const {isAuthenticated} = this.props;
    return (
      <div>
        <HeaderContainer />
        { 
          this.props.isAuthenticated === true
          ? this.props.history.push('/app')
          : this.props.history.push('/login')
        }
      </div>
    );
  }
}

export default HelloPageComponent;