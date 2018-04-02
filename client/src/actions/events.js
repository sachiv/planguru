import { EVENTS_LOAD, EVENT_ADD, EVENT_REMOVE, USER_EVENT_ADD, USER_EVENT_REMOVE } from './'
import api from '../Api';

export function eventsLoad() {
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        return api.getEventList().then(payload => {
            dispatch({
                type: EVENTS_LOAD,
                payload
            });
        }).catch(error => {
            throw (error);
        });
    };
}

export function eventAdd(userID, date, time) {
    return function (dispatch) {
        return api.postEvent(userID, date, time).then(payload => {
            dispatch({
                type: EVENT_ADD,
                payload
            });

            dispatch({
                type: USER_EVENT_ADD,
                userID,
                payload
            });
        }).catch(error => {
            throw (error);
        });
    };
}

export function eventRemove(id, userID = null) {
    return function (dispatch) {
        return api.deleteEvent(id).then(payload => {
            dispatch({
                type: EVENT_REMOVE,
                id
            });
            if (userID) {
                dispatch({
                    type: USER_EVENT_REMOVE,
                    userID,
                    id
                });
            }
        }).catch(error => {
            throw (error);
        });
    };
}