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
    this.props.history.push(location);
  }

  handleSubmit(){
    this.props.Click();
    <Redirect to="/"/>
  }
  
  render(){
    const {Click, name} = this.props;
    console.log(this.props.history + ' in logout');
    return (
      <div>
      Hello, {name}!
      <button onClick={this.handleSubmit}>Logout</button>
      </div>
    )
  }
}

export default LogoutComponent;