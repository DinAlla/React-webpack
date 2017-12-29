import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import AppComponent  from './components/AppComponent.jsx'; 
import HelloPageComponent from './components/HelloPageComponent.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';
//import LoginComponent from './components/LoginComponent.jsx';

import { Provider } from 'react-redux';
import { BrowserRouter, IndexRoute } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store} >
    <BrowserRouter history={browserHistory}>
      <Route  path="/" component={HelloPageComponent} isAuthenticated={state.users.isAuthenticated}/>
      <Route path="/app" component={AppComponent}/>
    </BrowserRouter>
  </Provider>
);

export default Root;