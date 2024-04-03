import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        background: rgb(12,115,150);
        background: radial-gradient(circle, rgba(12,115,150,1) 0%, rgba(6,7,85,1) 100%);
        font-family: "Arimo", sans-serif;
    }
`;

export default GlobalStyle;