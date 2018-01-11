import React from 'react';
import './HeaderComponent.css';
import HeaderContainer from '../containers/HeaderContainer.js';
import { Link, browserHistory } from 'react-router'
import {Route} from 'react-router';
import LoginContainer from '../containers/LoginContainer.js';
import MainComponent from '../components/MainComponent.jsx';

class HelloPageComponent extends React.Component {
  render() {
    const {isAuthenticated} = this.props;
    return (
      <div>
        <HeaderContainer />
        { 
          this.props.isAuthenticated === true
          ? App
          : browserHistory.push('/login')
        }
      </div>
    );
  }
}

export default HelloPageComponent;