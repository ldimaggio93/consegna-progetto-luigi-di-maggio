import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-image: url('/sfondo_di_maggio.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    color: white; /* Per migliorare la leggibilità del testo */
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
