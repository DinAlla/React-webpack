import React from 'react';
import './HeaderComponent.css';

class HelloPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, onLoginClick) { 
    this.props.onLoginClick(e.target.name.value, e.target.password.value)
  }

  render() {
    const {isAuthenticated, onLoginClick} = this.props;
    console.log(this.props.isAuthenticated);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />Name<input type="text" name="name" />
          <br />Password<input type="text" name="password" />
          <br /><input type="submit" value="Login" />
        </form>
        { this.props.isAuthenticated === true
          ? <AppComponent />
          : null
        }
      </div>
    );
  }
}

export default HelloPageComponent;