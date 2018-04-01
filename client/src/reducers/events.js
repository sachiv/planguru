import { EVENTS_LOAD, EVENT_ADD } from '../actions/'

const initialState = {
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOAD:
      return {
        events: action.payload
      }
    case EVENT_ADD:
      return {
        events: [...state.events, action.payload]
      }
    default:
      return state;
  }
};
