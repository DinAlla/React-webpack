import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-dom';
import { createStore } from 'react-redux';
import reducer from './reducers';

import AppComponent  from './AppComponent.jsx'; 

let store = createStore(reducer);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("main"));