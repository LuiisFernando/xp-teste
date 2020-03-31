import { SET_SEARCHING, RESET_SEARCHING } from '../constants/types';

export function setSearching(text) {
    return {
        type: SET_SEARCHING,
        payload: text
    };
}

export function resetSearching() {
    return {
        type: RESET_SEARCHING
    };
}