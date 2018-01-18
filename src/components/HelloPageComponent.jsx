import React from 'react';
import './HeaderComponent.css';
import { Link, browserHistory } from 'react-router'
import {Route} from 'react-router';
import LoginContainer from '../containers/LoginContainer';
import MainComponent from '../components/MainComponent.jsx';
import Redirect from 'react-router-dom';
import axios from 'axios';
import NotFoundComponent from '../components/NotFoundComponent.jsx';

class HelloPageComponent extends React.Component {
  constructor(props){
    super(props);
    this.redirect=this.redirect.bind(this);
  }
  
  redirect(location){
    this.props.history.push(location);
  }
  
  componentWillMount(){
    let data = localStorage.getItem('token');
    axios.post("/checkTocken", {data: data})
      .then((res)=>{
        this.props.onLoginClick(localStorage.getItem('token'),localStorage.getItem('userName'));
        this.redirect('/app')})
      .catch((err)=>{
        this.redirect('/login')})
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