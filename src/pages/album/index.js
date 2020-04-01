import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { toast } from "react-toastify";

import Sound from 'react-sound';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

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
    ArtistTitle,
    AlbumTitle,
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
    const [url, setUrl] = useState('');
    const [status, setStatus] = useState(Sound.status.STOPPED);

    const spotify = new SpotifyWebApi();

    useEffect(() => {
        async function loadAlbumInfo() {
            try {
                const { token } = store.getState().token;
                if (token) {
                    spotify.setAccessToken(token);
    
                    const response = await spotify.getAlbum(albumId);
    
                    // console.log('response >>> ', response);

                    response.tracks.items.map(musi => {
                        console.log(musi.preview_url)
                    });

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
    
    function handleplay(track) {
        setUrl(track.preview_url);
        setStatus(Sound.status.PLAYING)
    }

    function handlePause() {
        setStatus(Sound.status.PAUSE);
    }

    function handleResume() {
        setStatus(Sound.status.RESUME);
    }

    function mouseOver(track) {
        console.log('passou em cima');
    }
    
    return (
        <Container>
            <Image src={icone} alt="icon" onClick={handleResume} />
            <BackContainer onClick={() => history.goBack()}>
                <span>{"<"}</span>
                {"Voltar"}
            </BackContainer>
            <AlbumContainer>
                {album && (
                    <>
                        {url && status && (
                            <Sound 
                                url={url}
                                playStatus={status}
                            />
                        )}
                        <Capa>
                            <CapaImg src={album.images[1].url} alt="album-photo" />
                            <ArtistTitle>{album.artists[0].name}</ArtistTitle>
                            <AlbumTitle>{album.name}</AlbumTitle>
                        </Capa>
                        <Tracks>
                            <TrackList>
                            {album.tracks.items.map((track, index) => (
                                <li key={index}>
                                    <TrackContainer>
                                        <div>
                                            {/* <TrackNumber onClick={() => handleplay(track)}>{track.track_number}.</TrackNumber> */}
                                            <TrackNumber onMouseOver={() => mouseOver(track)}>
                                                {track.track_number}.
                                                <FontAwesomeIcon icon={faPlayCircle} onClick={() => handleplay(track)} />
                                            </TrackNumber>
                                            <TrackName onClick={handlePause}>{track.name}</TrackName>
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