import { USERS_LOAD, USER_EVENTS } from './'
import api from '../Api';

export function usersLoad() {
    return function (dispatch) {
        return api.getUserList().then(payload => {
            dispatch({
                type: USERS_LOAD,
                payload
            });
        }).catch(error => {
            throw (error);
        });
    };
}

export function userEvents(userID, date = null) {
    if (date) {
        return function (dispatch) {
            return api.getUserEventList(userID, date).then(payload => {
                dispatch({
                    type: USER_EVENTS,
                    payload,
                    userID
                });
            }).catch(error => {
                throw (error);
            });
        };
    } else {
        return function (dispatch) {
            return api.getUserEventList(userID).then(payload => {
                dispatch({
                    type: USER_EVENTS,
                    payload,
                    userID
                });
            }).catch(error => {
                throw (error);
            });
        };
    }
}