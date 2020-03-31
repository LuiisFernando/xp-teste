import { ADD_ALBUMSEARCHED, GET_ALBUMSSEARCHED } from '../constants/types';

export function AddAlbumSearched(album) {
    return {
        type: ADD_ALBUMSEARCHED,
        payload: album
    };
}

export function GetAlbumsSearched() {
    return {
        type: GET_ALBUMSSEARCHED,
    };
}