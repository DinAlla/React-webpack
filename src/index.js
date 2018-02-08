import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import Root from './routes.js';
import thunk from 'redux-thunk';
import reducer from './reducers/index.js';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//injectTapEventPlugin();

let store = createStore(
  reducer,
  applyMiddleware(thunk)
);

render(
  <MuiThemeProvider>
    <Root store={store} />
  </MuiThemeProvider>,
  document.getElementById("main"));