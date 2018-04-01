import { USERS_LOAD, USER_EVENTS, USER_EVENT_ADD } from '../actions/'

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
    case USER_EVENT_ADD:
      let newUser = state.users.find((user) => {
        return action.userID === user.id;
      });
      if (newUser) {
        newUser.events.push(action.payload);
        return {
          users: [...state.users, newUser]
        }
      }
      return state;
    default:
      return state;
  }
};
