import { USERS_LOAD, USER_EVENTS } from '../actions/'

const initialState = {
  date: new Date(),
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOAD:
      return {
        users: action.payload
      }
    case USER_EVENTS:
      return {
        users: state.users.map(user => {
          if (action.userID && parseInt(user.id, 0) === parseInt(action.userID, 0)) {
            user.events = action.payload;
            return user;
          } else {
            return {
              id: action.userID,
              events: action.payload
            };
          }
        })
      }
    default:
      return state;
  }
};
