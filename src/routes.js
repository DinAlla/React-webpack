import {Router, Route, Switch} from 'react-router';
import React from 'react';
import MainComponent  from './components/MainComponent.jsx'; 
import HelloPageContainer from './containers/HelloPageContainer';
import LoginContainer from './containers/LoginContainer.js';
import {browserHistory } from 'react-router';
import NotFoundComponent from './components/NotFoundComponent.jsx'
import { Provider } from 'react-redux';
import { BrowserRouter, IndexRoute } from 'react-router-dom';

const Root = ({store}) => 
  (
  <Provider store={store} >
    <BrowserRouter>
      <Route path='/' component={HelloPageContainer} />
    </BrowserRouter>
  </Provider>
);

export default Root;

