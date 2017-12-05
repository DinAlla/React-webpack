import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-dom';
import { createStore } from 'react-redux';
import reducer from './reducers/reducer.js';

import App  from './components/App.jsx'; 

let store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("main"));