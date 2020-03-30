import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';

import { Container, Image, Capa, CapaImg, BackContainer, AlbumContainer } from './styles';

import icone from '../../assets/icon2.png';

export default function Album() {
    const { albumId } = useParams();
    const history = useHistory();
    const [album, setAlbum] = useState(null);

    const spotify = new SpotifyWebApi();
    
    useEffect(() => {
        async function loadAlbumInfo() {
            const response = await spotify.getAlbum(albumId);

            console.log('response >>> ', response);
            setAlbum(response);
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
                        <div>
                            {/* {album.tracks.items.map((track, index) => (
                                <span></span>
                            ))} */}
                        </div>
                    </>
                )}
            </AlbumContainer>
        </Container>
    );
}