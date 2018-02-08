import React from 'react';
import {Route, Redirect} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import RaisedButton from 'material-ui/RaisedButton';

class LogoutComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
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
      <RaisedButton
        label="Logout"
        style={{
          marginLeft: '10px',
          border: '0',
          boxShadow: '0',
          width: '100px',
          height: '20px',
          float: 'right',
          clear: 'lest',
        }}
        labelStyle={{
          fontSize: '90%'
        }}
        onClick={()=>{this.handleSubmit()}}
      />
    )
  }
}

export default LogoutComponent;