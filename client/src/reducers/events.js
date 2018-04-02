import { EVENTS_LOAD, EVENT_ADD, EVENT_REMOVE } from '../actions/'

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
    case EVENT_REMOVE:
      return {
        events: state.events.filter((e) => {
          return e.id !== action.id
        })
      }
    default:
      return state;
  }
};
