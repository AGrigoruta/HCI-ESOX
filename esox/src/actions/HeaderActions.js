import ACTIONTYPES from '../utils/ACTIONTYPES';
import axios from 'axios';

export function changeTab(value) {
    return {
        type: ACTIONTYPES.TAB_CHANGED,
        data: value
    };
}

export function login() {
    return dispatch => {
        return axios
            .get('https://randomuser.me/api/?nat=us,dk,fr,gb,de,es,fi,ie,nl,nz', {
                headers: {
                    Accept: 'application/schema+json'
                }
            })
            .then(response => {
                console.log(response);
                dispatch(sendUser(response.data.results[0]));
            })
            .catch(error => {
                console.log('GET STATUS ERR: ' + error);
            });
    };
}

export function logout() {
    return {
        type: ACTIONTYPES.USER_LOGGED_OUT,
        data: {}
    }
}

export function sendUser(response) {
    return {
        type: ACTIONTYPES.USER_LOGGED_IN,
        data: response
    }
}