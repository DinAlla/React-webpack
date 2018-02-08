import { routerReducer } from 'react-router-redux';
import todos from './reducer.js';
import users from './users.js';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  users,
  routing: routerReducer
});