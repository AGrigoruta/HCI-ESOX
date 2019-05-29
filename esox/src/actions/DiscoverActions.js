import ACTIONTYPES from '../utils/ACTIONTYPES';
import axios from 'axios';

export function changeFilter(value) {
    return {
        type: ACTIONTYPES.DISCOVER_FILTER_CHANGED,
        data: value
    };
}

export function selectCourse(course) {
    return {
        type: ACTIONTYPES.COURSE_CHANGED,
        data: course
    };
}

export function getFriends(amount) {
    return dispatch => {
        return axios
            .get(`https://randomuser.me/api/?nat=us,dk,fr,gb,de,es,fi,ie,nl,nz&results=${amount}`, {
                headers: {
                    Accept: 'application/schema+json'
                }
            })
            .then(response => {
                console.log(response);
                dispatch(sendFriends(response.data.results));
            })
            .catch(error => {
                console.log('GET STATUS ERR: ' + error);
            });
    };
}


export function sendFriends(friends) {
    return {
        type: ACTIONTYPES.FRIENDS_POPULATED,
        data: friends
    };
}