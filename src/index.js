import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './routes.js';
import reducer from './reducers/index.js';

let store = createStore(reducer);

render(
  <Root store={store} />,
  document.getElementById("main"));