import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './routes.js';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

let store = createStore(
  reducer,
  applyMiddleware(thunk)
);

render(
  <Root store={store} />,
  document.getElementById("main"));