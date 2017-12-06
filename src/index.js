import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer.js';

import AppComponent  from './components/AppComponent.jsx'; 

let store = createStore(reducer);

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("main"));