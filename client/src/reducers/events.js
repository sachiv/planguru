import { EVENTS_LOAD } from '../actions/'

const initialState = {
  events: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_LOAD:
      return {
        events: action.payload.map(payload => {
          return payload;
        })
      }
    default:
      return state;
  }
};
