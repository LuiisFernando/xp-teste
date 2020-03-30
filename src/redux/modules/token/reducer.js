import { GET_TOKEN, SET_TOKEN, RESET_TOKEN } from '../constant/types';

const initialStateToken = {
    token: null
};

export default function tokenReducer(state = initialStateToken, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case GET_TOKEN:
            return {
                ...state,
                token: state.token
            };
        case RESET_TOKEN:
            return {
                ...state,
                token: null
            };
        case 'persist/REHYDRATE':
            if (action.payload && action.payload.token.token) {
                state.token = action.payload.token.token;
            }
        default:
            return state;
    }
}