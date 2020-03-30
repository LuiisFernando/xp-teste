import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Title } from './styles';

export default function Token() {
    const history = useHistory();

    function handleChangePage() {
        history.push('/principal');
    }

    return (
        <Container>
            <Title>Digite ou cole o token do Spotify</Title>

            <div>
                <input type="text" placeholder="Token" autoFocus />
                <button onClick={handleChangePage}>Iniciar</button>
            </div>
        </Container>
    );
}