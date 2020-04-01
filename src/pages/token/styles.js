import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        max-width: 800px;
        width: 800px;

        @media (min-width: 320px) and (max-width: 414px) {
            max-width: 300px;
            width: 300px;
        }

        @media (min-width: 480px) and (max-width: 768px) {
            max-width: 700px;
            width: 700px;
        }
    }

    input {
        height: 60px;
        background: #191414;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom-color: #999999;
        font-size: 50px;
        margin-bottom: 50px;
    }

    

    button {
        height: 40px;
        border: 0;
        color: #FFF;
        background: #1aa44a;
        font-size: 20px;
        letter-spacing: 2px;
        border-radius: 20px;
    }

    button:hover {
        background: #168f41;
    }

`;

export const Title = styled.h1`
    margin: 200px 0 100px 0;
    font-size: 48px;
`;