import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import events from './events';
import users from './users';

export default combineReducers({
  router: routerReducer,
  events,
  auth,
  users
});
