import { AUTH_SIGNIN, AUTH_SIGNOUT, AUTH_DETAILS } from './'
import api from '../Api';
import { push } from 'react-router-redux';

export function authSignIn(email, password) {
    return function (dispatch) {
        return api.postAuthSignIn(email, password).then(payload => {
            if (payload.hasOwnProperty('key')) {
                dispatch({
                    type: AUTH_SIGNIN,
                    payload
                });
                dispatch(push('/users'));
                api.getAuthDetails().then(payload => {
                    dispatch({
                        type: AUTH_DETAILS,
                        payload: payload[0]
                    });
                });
            } else {
                throw (payload);
            }
        }).catch(error => {
            throw (error);
        });
    };
}

export function authSignOut(email, password) {
    return function (dispatch) {
        return api.postAuthSignOut().then(payload => {
            if (payload.hasOwnProperty('detail')) {
                dispatch({
                    type: AUTH_SIGNOUT
                });
            } else {
                throw (payload);
            }
        }).catch(error => {
            throw (error);
        });
    };
}