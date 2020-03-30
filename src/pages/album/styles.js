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
    margin: 40px 150px 0 200px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
`;

export const Capa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CapaImg = styled.img`
    margin-bottom: 20px;
`;

export const TrackContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Tracks = styled.div`
    padding-left: 50px;
    display: flex;
    flex: 1;
`;

export const TrackList = styled.ul`

    display: flex;
    flex-direction: column;
    flex: 1;

    li {
        padding: 0 0 20px 0;
    }

`;

export const TrackNumber = styled.span`
    padding: 0 20px 0 0;
`;

export const TrackName = styled.span`
    color: #FAFAFA;
    font-weight: 500;
`;

export const TrackTime = styled.span`
    
`;
