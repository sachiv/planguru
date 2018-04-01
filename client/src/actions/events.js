import { EVENTS_LOAD, EVENT_ADD } from './'
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
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function (dispatch) {
        return api.postEvent(userID, date, time).then(payload => {
            dispatch({
                type: EVENT_ADD,
                payload
            });
        }).catch(error => {
            throw (error);
        });
    };
}