import React from 'react';
import './HeaderComponent.css';

class HelloPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    onLoginClick(e.target.name, e.target.password);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <br />Name<input type="text" name="name" />
          <br />Password<input type="text" name="password" />
          <br /><input type="submit" value="Login" />
        </form>
        {this.props.isAuthenticated === true
          ? <AppComponent />
          : null
        }
      </div>
    );
  }
}