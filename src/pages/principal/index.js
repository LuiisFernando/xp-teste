import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import SpotifyWebApi from 'spotify-web-api-js';
import { toast } from "react-toastify";

import { AddAlbumSearched } from '../../redux/modules/albums/actions';

import icon from '../../assets/icon2.png';
import { store } from '../../redux';

import { 
    Container,
    Image,
    SearchContainer,
    Title,
    ArtistContainer,
    Grid,
    AlbumImg,
    AlbumInfo,
    ArtistTitle,
    AlbumTitle
} from './styles';

export default function Principal() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [albumsSearched, setAlbumsSearched] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [musics, setMusics] = useState([]);
    const [artistSearched, setArtistSearched] = useState('');
    const [recentVisible, setRecentVisible] = useState(false);

    const spotify = new SpotifyWebApi();

    const initialValues = {
        inputArtist: ''
    }

    useEffect(() => {

        async function loadToken() {
            try {
                const token = store.getState().token;

                if (token && token.token) {
                    spotify.setAccessToken(token.token);
                    const me = await spotify.getMe();
                } else {
                    toast.error('Token não localizado!');
                    history.push('/');
                }
            } catch (err) {
                toast.error('ocorreu algum erro com o token, reinsira novamente.');
                history.push('/');
            }
        }

        function loadAlbum() {
            const { albums } = store.getState().album;

            if (albums) {
                setAlbumsSearched(albums);
                setRecentVisible(true);
            }
        }

        loadToken();
        loadAlbum();
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
                setRecentVisible(false);
    
            } else {
                setAlbums([]);
            }
        } catch (err) {
            toast.error('problema com token, reinsira o token novamente');
            history.push('/');
        }
        
    }

    function handlePage(album) {
        dispatch(AddAlbumSearched(album));
        const id = album.album_id ? album.album_id : album.id;
        history.push(`/album/${id}`)
    }

    function handleSubmit({ inputArtist }) {
        setArtistSearched(inputArtist);
        Search(inputArtist);
    }

    return (
        <Container>
            <Image src={icon} alt="icon" />

            <SearchContainer>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <Field 
                            name="inputArtist"
                            children={({ field }) => (
                                <input 
                                    type="text"
                                    {...field}
                                    autoComplete="off"
                                    placeholder="Comece a escrever ..." 
                                />
                            )}
                        />
                    </Form>
                </Formik>
            </SearchContainer>
            <ArtistContainer visible={recentVisible}>
                <Title>Álbuns buscados recentemente</Title>
                <Grid>
                    {albumsSearched && albumsSearched.map((album, index) => (
                        <AlbumInfo key={index} onClick={() => handlePage(album)}>
                            <AlbumImg src={album.image[1].url} alt={`album-img-1`} />
                            <ArtistTitle>{album.name}</ArtistTitle>
                            <AlbumTitle>{album.artista.name}</AlbumTitle>
                        </AlbumInfo>
                    ))}
                </Grid>
            </ArtistContainer>
            <ArtistContainer visible={!recentVisible}>
                {console.log('recent Visible', recentVisible)}
                <Title>{`Resultados encontrados para "${artistSearched}"`}</Title>
                <Grid>
                    {albums && albums.map((album) => (
                        <AlbumInfo key={album.id} onClick={() => handlePage(album)}>
                            <AlbumImg src={album.image[1].url} alt={`album-img-1`} />
                            <ArtistTitle>{album.name}</ArtistTitle>
                            <AlbumTitle>{album.artista.name}</AlbumTitle>
                        </AlbumInfo>
                    ))}
                </Grid>
                <Grid>
                    {musics && musics.map((album, index) => (
                        <AlbumInfo key={index} onClick={() => handlePage(album)}>
                            <AlbumImg src={album.image[1].url} alt={`album-img-1`} />
                            <ArtistTitle>{album.name}</ArtistTitle>
                            <AlbumTitle>{album.artista.name}</AlbumTitle>
                        </AlbumInfo>
                    ))}
                </Grid>
            </ArtistContainer>
        </Container>
    );
}