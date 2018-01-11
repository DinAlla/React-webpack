import {Router, Route, Switch} from 'react-router';
import React from 'react';
import MainComponent  from './components/MainComponent.jsx'; 
import HelloPageContainer from './containers/HelloPageContainer';
import LoginContainer from './containers/LoginContainer';
import {browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import { BrowserRouter, IndexRoute } from 'react-router-dom';

const Root = ({store, history}) => 
(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={HelloPageContainer} >
        <Route path="app" coponent={MainComponent}/>
        <Route path="login" coponent={LoginContainer}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;

//Login page component 
// локал сторедж в хроме
// сделать через history 