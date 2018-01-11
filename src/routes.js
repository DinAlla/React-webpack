import {Router, Route, history, Switch} from 'react-router';
import React from 'react';
import MainComponent  from './components/MainComponent.jsx'; 
import HelloPageContainer from './containers/HelloPageContainer';
import LoginContainer from './containers/LoginContainer';

import { Provider } from 'react-redux';
import { BrowserRouter, IndexRoute } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store} >
    <BrowserRouter history={history}>
    <Switch>
        <Route path="/" component={HelloPageContainer} />
        <Route path='/login' component={LoginContainer}/>
        <Route path='/app' component={MainComponent}/>
    </Switch>
    </BrowserRouter>
  </Provider>
);

export default Root;

//Login page component 
// локал сторедж в хроме
// сделать через history 