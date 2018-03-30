import { EVENTS_LOAD } from './'
import api from '../Api';

export function eventsLoad(payload) {
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