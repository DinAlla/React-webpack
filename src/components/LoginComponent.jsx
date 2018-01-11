import React from 'react';

class LoginComponent extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, onLoginClick) { 
    e.preventDefault();
    this.props.onLoginClick(e.target.name.value, e.target.password.value)
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <br />Name<input type="text" name="name" />
      <br />Password<input type="text" name="password" />
      <br /><input type="submit" value="Login" />
      </form>
    );
  }
}

export default LoginComponent;