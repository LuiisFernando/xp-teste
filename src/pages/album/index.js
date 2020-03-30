import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { toast } from "react-toastify";

import { millisToMinutesAndSeconds } from '../../helper/util';

import { store } from '../../redux';

import icone from '../../assets/icon2.png';
import { 
    Container,
    Image,
    Capa,
    CapaImg,
    BackContainer,
    AlbumContainer,
    TrackContainer,
    Tracks,
    TrackList,
    TrackNumber,
    TrackName,
    TrackTime
} from './styles';


export default function Album() {
    const { albumId } = useParams();
    const history = useHistory();
    const [album, setAlbum] = useState(null);

    const spotify = new SpotifyWebApi();
    
    useEffect(() => {
        async function loadAlbumInfo() {
            try {
                const { token } = store.getState().token;
                if (token) {
                    spotify.setAccessToken(token);
    
                    const response = await spotify.getAlbum(albumId);
    
                    console.log('response >>> ', response);
                    setAlbum(response);
                } else {
                    toast.error('token não localizado, reinsira o token!');
                    history.push('/');
                }

            } catch (err) {
                console.log(err);
                toast.error('houve um problema com o token, reinsira o token!');
                history.push('/');
            }
        }

        loadAlbumInfo();

    }, [albumId]);
    return (
        <Container>
            <Image src={icone} alt="icon" />
            <BackContainer onClick={() => history.goBack()}>{"< Voltar"}</BackContainer>
            <AlbumContainer>
                {album && (
                    <>
                        <Capa>
                            <CapaImg src={album.images[1].url} alt="album-photo" />
                            <span>{album.artists[0].name}</span>
                            <span>{album.name}</span>
                        </Capa>
                        <Tracks>
                            <TrackList>
                            {album.tracks.items.map((track, index) => (
                                <li key={index}>
                                    <TrackContainer>
                                        <div>
                                            <TrackNumber>{track.track_number}.</TrackNumber>
                                            <TrackName>{track.name}</TrackName>
                                            {/* <span>{track.preview_url}</span> */}
                                        </div>
                                        <TrackTime>{millisToMinutesAndSeconds(track.duration_ms)}</TrackTime>
                                    </TrackContainer>
                                </li>
                            ))}
                            </TrackList>
                        </Tracks>
                    </>
                )}
            </AlbumContainer>
        </Container>
    );
}