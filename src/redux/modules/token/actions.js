import { SET_TOKEN, GET_TOKEN, RESET_TOKEN } from '../constant/types';

export function setToken(token) {
    return {
        type: SET_TOKEN,
        payload: token
    };
}

export function getToken() {
    return {
        type: GET_TOKEN
    };
}

export function resetToken() {
    return {
        type: RESET_TOKEN
    };
}
