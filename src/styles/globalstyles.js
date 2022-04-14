import { createGlobalStyle } from 'styled-components';
import { colors } from './themes';

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
    color: rgb(${({theme})=> theme.textColor});
    padding-top: 3.8em;
    position: relative;
    background-color: black;
    background: rgb(${({theme})=> theme.backgroundColor});
  }
`;
