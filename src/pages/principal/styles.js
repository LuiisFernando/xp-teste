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

export const Title = styled.span`
    margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 200px 0 200px;

    label {
        font-size: 16px;
    }

    input {
        height: 60px;
        background: #191414;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom-color: #999999;
        font-size: 50px;
        margin-top: 20px;
        color: #FAFAFA;
    }
`;

export const RecentsSearch = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 200px 0 200px;

    span {
        font-size: 24px;
    }
`;

export const AlbumImg = styled.img`
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
`;

export const AlbumInfo = styled.div`
    /* margin: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-size: 14px;
        margin-bottom: 10px;
        align-self: center;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
`;