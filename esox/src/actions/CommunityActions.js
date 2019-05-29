import ACTIONTYPES from '../utils/ACTIONTYPES';
import axios from 'axios';

export function saveGuild(course) {
    return {
        type: ACTIONTYPES.GUILD_SAVED,
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
                dispatch(sendFriends(response.data.results));
            })
            .catch(error => {
                console.log('GET STATUS ERR: ' + error);
            });
    };
}


export function sendFriends(friends) {
    return {
        type: ACTIONTYPES.GUILD_FRIENDS_POPULATED,
        data: friends
    };
}

export function getMembers(amount) {
    return dispatch => {
        return axios
            .get(`https://randomuser.me/api/?nat=us,dk,fr,gb,de,es,fi,ie,nl,nz&results=${amount}`, {
                headers: {
                    Accept: 'application/schema+json'
                }
            })
            .then(response => {
                dispatch(sendMembers(response.data.results));
            })
            .catch(error => {
                console.log('GET STATUS ERR: ' + error);
            });
    };
}


export function sendMembers(members) {
    return {
        type: ACTIONTYPES.MEMBERS_POPULATED,
        data: members
    };
}