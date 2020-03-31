import { ADD_ALBUMSEARCHED, GET_ALBUMSSEARCHED } from '../constant/types';

const initialStateAlbumsSearched = {
    albums: []
};

export default function albumSearchedReducer(state = initialStateAlbumsSearched, action) {
    switch(action.type) {
        case ADD_ALBUMSEARCHED:
            if (state.albums && !state.albums.includes(action.payload)) {
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