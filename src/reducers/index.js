import { routerReducer } from 'react-router-redux';
import reducer from './reducer.js';
import users from './users.js';
import { combineReducers } from 'redux';
import { authStateReducer } from 'redux-oauth';

export default combineReducers({
  reducer,
  users,
  auth: authStateReducer,
  routing: routerReducer
});