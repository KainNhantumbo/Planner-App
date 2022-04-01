import styled from 'styled-components';
import { colors } from './colors';

export const FormContainer = styled.section`
	width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  div {
    margin-bottom: 1.2em;
    padding: 0 .5em;
    color: rgb(${colors.primaryColor});
  }
`;
