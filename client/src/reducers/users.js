import { USERS_LOAD } from '../actions/'

const initialState = {
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOAD:
      return {
        users: action.payload
      }
    default:
      return state;
  }
};
