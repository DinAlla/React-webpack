import React from 'react';

class LogoutComponent extends React.Component {
  render(){
    const {Click, name} = this.props;
    return (
      <div>
      Hello, {name}!
      <button onClick={this.props.Click}>Logout</button>
      </div>
    )
  }
}

export default LogoutComponent;