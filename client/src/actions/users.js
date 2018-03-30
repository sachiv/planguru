import { USERS_LOAD } from './'
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