import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from "react-toastify";

import SpotifyWebApi from 'spotify-web-api-js';

import { setToken, resetToken } from '../../redux/modules/token/actions';

import { Container, Title } from './styles';

export default function Token() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [token, setTokenn] = useState('');

    const spotify = new SpotifyWebApi();

    useEffect(() => {
        dispatch(resetToken());
    }, []);

    async function handleClick() {
        try {
            if (token) {
                spotify.setAccessToken(token);

                const me = await spotify.getMe();

                if (me && me.id) {
                    dispatch(setToken(token));
                    history.push('/principal');
                }
            }
        } catch(err) {
            toast.error('token inválido!');
            setTokenn('');
        }
    }

    return (
        <Container>
            <Title>Digite ou cole o token do Spotify</Title>

            <div>
                <input type="text" placeholder="Token" value={token} onChange={(e) => setTokenn(e.target.value)} autoFocus />
                <button onClick={handleClick}>Iniciar</button>
            </div>
        </Container>
    );
}