import React from 'react';
import {Route} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import MainComponent from '../components/MainComponent.jsx';

class HelloPageComponent extends React.Component {
  constructor(props){
    super(props);
    this.redirect=this.redirect.bind(this);
  }

  redirect(location){
    this.props.history.push(location);
  }

  componentWillMount(){
    localStorage.getItem('accessToken')
    ? this.redirect('/app')
    : this.redirect('/login')
  }

  render() {
    const {isAuthenticated} = this.props;
    return (
      <div> 
        <Route path='/app' component={MainComponent} />
        <Route path='/login' component={LoginContainer} />
      </div>
    )
  }
}

export default HelloPageComponent;