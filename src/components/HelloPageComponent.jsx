import React from 'react';
import './HeaderComponent.css';
import { Link, browserHistory } from 'react-router'
import {Route} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import MainComponent from '../components/MainComponent.jsx';
import Redirect from 'react-router-dom';
class HelloPageComponent extends React.Component {
  constructor(props){
    super(props);
    this.redirect=this.redirect.bind(this);
  }
  
  redirect(location){
    this.props.history.push(location);
  }

  render() {
    const {isAuthenticated} = this.props;
    console.log('in hello' + this.props.isAuthenticated);
    return (
      <div> 
        {
          this.props.isAuthenticated === true
          ? this.props.history.push("/app")
          : this.redirect("/login")
        }
        <Route path='/app' component={MainComponent} />
        <Route path='/login' component={LoginContainer} />
      </div>
    )
  }
}

export default HelloPageComponent;