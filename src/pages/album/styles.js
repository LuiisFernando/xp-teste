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
    margin: 0 200px 0 200px;
    cursor: pointer;
    color: #FAFAFA;
    font-size: 15px;

    span {
        margin-right: 15px; 
    }

    @media (min-width: 320px) and (max-width: 414px)  {
        margin: 20px 50px 0 50px;
    }

    @media (min-width: 480px) and (max-width: 768px) {
        margin: 20px 0 0 15px;
    }

    @media (min-width: 780px) and (max-width: 1024px) {
        margin: 40px 0px 0 20px;
    }
`;

export const AlbumContainer = styled.div`
    margin: 50px 150px 0 200px;
    display: flex;
    flex-direction: row;
    max-width: 1200px;

    @media (min-width: 320px) and (max-width: 414px) {
        /* margin: 50px 150px 0 150px; */
        margin: 0;
        margin-top: 20px;
        flex-direction: column;
    }

    @media (min-width: 480px) and (max-width: 768px) {
        margin: 40px 10px 0 10px;
    }

    @media (min-width: 780px) and (max-width: 1024px) {
        margin: 30px 20px 0 20px;
    }
`;

export const Capa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArtistTitle = styled.span`
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
    color: #FAFAFA;
`;

export const AlbumTitle = styled.span`
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
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

    @media (max-width: 414px) {
        padding-left: 10px;
        margin-top: 40px;
    }
`;

export const TrackList = styled.ul`

    display: flex;
    flex-direction: column;
    flex: 1;

    li {
        padding: 0 10px 20px 0;
    }

`;

export const TrackNumber = styled.span`
    padding: 0 20px 0 0;
    width: 20px;
    height: 20px;
    color: ${props => (props.isPlaying ? '#1aa44a' : '#999999')};
`;

export const TrackName = styled.span`
    font-weight: 500;

    color: ${props => (props.isPlaying ? '#1aa44a' : '#FAFAFA')};
`;

export const TrackTime = styled.span`
    
`;
