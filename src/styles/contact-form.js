import styled from 'styled-components';
import { colors } from './colors';

export const FormContainer = styled.section`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

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

	form {
		display: flex;
		flex-flow: column nowrap;
		padding: 0 0.5em;

		label {
			margin-bottom: 0.2em;
			font-weight: 500;
			user-select: none;
		}

		input {
			margin-bottom: 0.5em;
			border-style: none;
			border: 2px solid rgba(${colors.darkColor});
			border-radius: 5px;
			padding: 2px 5px;
		}

		button {
			border: none;
			border-style: none;
			border-radius: 5px;
			background: rgba(${colors.primaryColor});
			padding: 5px;
			color: rgb(${colors.whiteColor});
			font-weight: 500;
			margin-bottom: 5px;

			:hover {
				color: rgba(${colors.secondaryColor}, 1);
				transform: scale(1.02);
				transition: all 200ms ease-out;
			}
		}
	}
`;
