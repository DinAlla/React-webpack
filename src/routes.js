import {Router, Route, browserHistory} from 'react-router';
import React from 'react';
import AppComponent  from './components/AppComponent.jsx'; 
import HelloPageContainer from './containers/HelloPageContainer';

import { Provider } from 'react-redux';
import { BrowserRouter, IndexRoute } from 'react-router-dom';

const Root = ({store}) => (
  <Provider store={store} >
    <BrowserRouter history={browserHistory}>
     <Route path="/" component={HelloPageContainer}/>
    </BrowserRouter>
  </Provider>
);

export default Root;