import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import auth from './auth';
import events from './events';
import users from './users';

export default combineReducers({
  router: routerReducer,
  counter,
  events,
  auth,
  users
});
