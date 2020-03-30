import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import SpotifyWebApi from 'spotify-web-api-js';
import { toast } from "react-toastify";

import icon from '../../assets/icon2.png';
import { store } from '../../redux';

import { 
    Container,
    Image,
    SearchContainer,
    Title,
    RecentsSearch,
    Grid,
    AlbumImg,
    AlbumInfo
} from './styles';

export default function Principal() {
    const history = useHistory();
    const [albums, setAlbums] = useState([]);
    const [musics, setMusics] = useState([]);

    const spotify = new SpotifyWebApi();

    useEffect(() => {

        async function loadToken() {
            try {
                const token = store.getState().token;

                if (token && token.token) {
                    console.log('token localizado', token.token);
                    spotify.setAccessToken(token.token);

                    const me = await spotify.getMe();
                    console.log(me)
                } else {
                    history.push('/');
                }
            } catch (err) {
                toast.error('ocorreu algum erro com o token, reinsira novamente.');
                history.push('/');
            }
        }

        //loadToken();
    }, []);

    async function Search(text) {
        try {
            if (text) {

                const albumm = await spotify.searchAlbums(text);
    
    
                const albumMapped = albumm.albums.items.map(album => {
                    return {
                        type: album.album_type,
                        image: album.images,
                        name: album.name,
                        id: album.id,
                        uri: album.uri,
                        artista: album.artists[0]
                    }
                });
    
                setAlbums(albumMapped);
    
                const musics = await spotify.searchTracks(text);
    
                const musicsMapped = musics.tracks.items.map(music => {
                    return {
                        type: music.type,
                        name: music.name,
                        artista: music.album.artists[0],
                        image: music.album.images,
                        album_id: music.album.id
                    }
                })
                setMusics(musicsMapped);
    
            } else {
                setAlbums([]);
            }
        } catch (err) {
            toast.error('problema com token, reinsira o token novamente');
            history.push('/');
        }
        
    }

    function handlePage(albumId) {
        history.push(`/album/${albumId}`)
    }

    return (
        <Container>
            <Image src={icon} alt="icon" />

            <SearchContainer>
                <label htmlFor="inputArtist">Busque por artistas, albuns ou músicas</label>
                <input type="text" autoComplete="off" placeholder="Comece a escrever ..." id="inputArtist" onChange={(e) => Search(e.target.value)} />
            </SearchContainer>
            <RecentsSearch>
                <Title>Álbuns buscados recentemente</Title>
                
                <Grid>
                    {albums && albums.map((album) => (
                        <AlbumInfo key={album.id} onClick={() => handlePage(album.id)}>
                            <AlbumImg src={album.image[1].url} width="100" height="100" alt={`album-img-1`} />
                            <span>{album.name}</span>
                            <span>{album.artista.name}</span>
                            {/* <span>{album.preview_url}</span> */}
                        </AlbumInfo>
                    ))}
                </Grid>
                <Grid>
                    {musics && musics.map((album, index) => (
                        <AlbumInfo key={index} onClick={() => handlePage(album.album_id)}>
                            <AlbumImg src={album.image[1].url} width="100" height="100" alt={`album-img-1`} />
                            <span>{album.name}</span>
                            <span>{album.artista.name}</span>
                            <span>{album.album_id}</span>
                        </AlbumInfo>
                    ))}
                </Grid>
            </RecentsSearch>
        </Container>
    );
}