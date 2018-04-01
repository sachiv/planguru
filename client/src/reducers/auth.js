import { AUTH_SIGNIN, AUTH_SIGNOUT, AUTH_DETAILS, AUTH_UPDATE_NAME } from '../actions/'

const initialState = {
  authed: false,
  token: '',
  id: '',
  name: '',
  username: '',
  email: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN:
      localStorage.setItem("token", action.payload.key);
      return {
        authed: true,
        token: action.payload.key,
        id: '',
        name: '',
        username: '',
        email: ''
      }
    case AUTH_SIGNOUT:
      localStorage.removeItem("token");
      return {
        authed: false,
        token: '',
        id: '',
        name: '',
        username: '',
        email: ''
      }
    case AUTH_DETAILS:
      return {
        authed: true,
        token: state.token,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
        email: action.payload.email
      }
    case AUTH_UPDATE_NAME:
      return {
        authed: state.authed,
        token: state.token,
        id: state.id,
        name: action.payload,
        username: state.username,
        email: state.email
      }
    default:
      return state;
  }
};
