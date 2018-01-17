import React from 'react';
import './HeaderComponent.css';
import { Link, browserHistory } from 'react-router'
import {Route} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import MainComponent from '../components/MainComponent.jsx';
import Redirect from 'react-router-dom';
import axios from 'axios';

class HelloPageComponent extends React.Component {
  constructor(props){
    super(props);
    this.redirect=this.redirect.bind(this);
    this.state = {
      redirectLocation: '/login'
    }
  }
  
  redirect(location){
    this.props.history.push(location);
  }
  
  componentDidMount(){
    console.log('in did mount ' + this.props.isAuthenticated);
    let data = localStorage.getItem('token');
    axios.post("/checkTocken", {data: data})
      .then((res)=>{
        console.log(' in will m ')
        this.props.onLoginClick(localStorage.getItem('token'),localStorage.getItem('userName'));
        this.redirect('/app')})
      .catch((err)=>{
        console.log(err);
        this.redirect('/login')})
  }

  render() {
    const {isAuthenticated} = this.props;
    console.log('in hello' + this.props.isAuthenticated);
    return (
      <div> 
        <Route path='/app' component={MainComponent} />
        <Route path='/login' component={LoginContainer} />
      </div>
    )
  }
}

export default HelloPageComponent;