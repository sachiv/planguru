import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import events from './events';

export default combineReducers({
  router: routerReducer,
  counter,
  events
});
