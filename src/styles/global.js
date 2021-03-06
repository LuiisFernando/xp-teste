import { createGlobalStyle } from 'styled-components';

import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100% !important;
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    min-height: 100% !important;
    height: 100% !important;
    background: #191414;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #999999;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
