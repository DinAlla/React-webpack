import React from 'react';
import './HeaderComponent.css';
import AppComponent from './AppComponent.jsx'
class HelloPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, onLoginClick) { 
    e.preventDefault();
    this.props.onLoginClick(e.target.name.value, e.target.password.value)
  }

  render() {
    const {isAuthenticated, onLoginClick} = this.props;
    return (
      <div>
        { 
          this.props.isAuthenticated === true
          ? <AppComponent />
          : 
          <form onSubmit={this.handleSubmit}>
          <br />Name<input type="text" name="name" />
          <br />Password<input type="text" name="password" />
          <br /><input type="submit" value="Login" />
          </form>
        }
      </div>
    );
  }
}

export default HelloPageComponent;