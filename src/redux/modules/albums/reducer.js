import { ADD_ALBUMSEARCHED, GET_ALBUMSSEARCHED } from '../constants/types';

const initialStateAlbumsSearched = {
    albums: []
};

export default function albumSearchedReducer(state = initialStateAlbumsSearched, action) {
    switch(action.type) {
        case ADD_ALBUMSEARCHED:
            const albumlocated = state.albums.find(x => x.id === action.payload.id);
            if (state.albums && !albumlocated) {
                return {
                    ...state,
                    albums: [...state.albums, action.payload]
                };
            } else {
                return state
            }
        case GET_ALBUMSSEARCHED:
            return {
                ...state
            };
        default:
            return state;
    }
}