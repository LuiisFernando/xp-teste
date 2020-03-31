import { SET_SEARCHING, RESET_SEARCHING } from '../constants/types';

const initialValuesSearching = {
    text: null
};

export default function searchingReducer(state = initialValuesSearching, action) {
    switch(action.type) {
        case SET_SEARCHING:
            return {
                ...state,
                text: action.payload
            };
        case RESET_SEARCHING:
            return {
                ...state,
                text: null
            }
        default:
            return state;
    }
}