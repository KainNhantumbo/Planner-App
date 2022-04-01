import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyles = createGlobalStyle`
  * {    
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Poppins, 'PT Sans', Montserrat;
  }

  span, label {
    user-select: none;
  }

  body {
    color: rgb(${colors.textColor});
    padding-top: 3.8em;
    position: relative;
  }
`;
