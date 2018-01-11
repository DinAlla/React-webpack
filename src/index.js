import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './routes.js';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'
let store = createStore(
  reducer,
  applyMiddleware(thunk)
);
let history = syncHistoryWithStore(browserHistory, store);
render(
  <Root store={store} history={history} />,
  document.getElementById("main"));