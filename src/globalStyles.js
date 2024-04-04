import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        overflow: hidden;
        margin: 0;
    }

    body{
        background: rgb(12,115,150);
        background: radial-gradient(circle, rgba(12,115,150,1) 0%, rgba(6,7,85,1) 100%);
        font-family: "Arimo", sans-serif;
        min-height: 100vh;
        display: flex;
        align-items: start;
        justify-content: center;
    }
`;

export default GlobalStyle;