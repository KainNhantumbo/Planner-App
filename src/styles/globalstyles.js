import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, 'PT Sans', Montserrat;
  }

  body {
    padding-top: 3.8em;
  }
`;
