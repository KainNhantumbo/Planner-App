import styled from 'styled-components';
import Contacts from '../pages/Contacts';
import { colors } from './colors';

export const ContactsContainer = styled.section`
	div {
		margin-bottom: 1.2em;
		padding: 0 0.5em;
		color: rgb(${colors.primaryColor});
		span {
			position: relative;
			padding: 0 1.2em;
			font-weight: 500;

			svg {
				position: absolute;
				left: 2px;
				stroke-width: 1px;
			}
		}
	}
`;
