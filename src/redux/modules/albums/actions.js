import { ADD_ALBUMSEARCHED, GET_ALBUMSSEARCHED } from '../constant/types';

export function AddAlbumSearched(album) {
    console.log(album);
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