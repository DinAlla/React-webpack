import {Route} from 'react-router';
import React from 'react';
import HelloPageContainer from './containers/HelloPageContainer';
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom';

const Root = ({store}) => 
  (
    <Provider store={store} >
      <BrowserRouter>
        <Route path='/' component={HelloPageContainer} />
      </BrowserRouter>
    </Provider>
);

export default Root;

