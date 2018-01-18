import React from 'react';
import {Route, Redirect} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import { Link, browserHistory as history } from 'react-router';

class LogoutComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.redirect=this.redirect.bind(this);
  }

  redirect(location){
    history.push(location);
  }

  componentDidUpdate(){
    if(this.props.isAuthenticated === false) this.props.history.push('/login');
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.Click();
    if(this.props.isAuthenticated === false) this.props.history.push('/login');
  }
  
  render(){
    const {Click, name} = this.props;
    return (
      <div>
      Hello, {name}!
      <button onClick={this.handleSubmit}>Logout</button>
      </div>
    )
  }
}

export default LogoutComponent;