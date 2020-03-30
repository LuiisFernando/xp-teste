import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;


export const Image = styled.img`
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
`;

export const BackContainer = styled.div`
    margin-top: 10px;
    margin: 20px 200px 0 200px;
    cursor: pointer;
`;

export const AlbumContainer = styled.div`
    margin: 40px 200px 0 200px;
    display: flex;
    flex-direction: row;
`;

export const Capa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CapaImg = styled.img`
    margin-bottom: 20px;
`;