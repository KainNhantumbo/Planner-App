import styled from 'styled-components';
import { colors } from './colors';

export const FormContainer = styled.section`
	@keyframes enterAnime {
		from {
			transform: translateX(20em);
		}
		to {
			transform: translateX(0);
		}
	}
	animation: enterAnime 400ms ease-out forwards;
	width: 100%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;

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
			position: relative;
			padding-left: 1.2em;

			svg {
				position: absolute;
				left: 2px;
				stroke-width: 0.2px;
				color: rgb(${colors.primaryColor});
			}
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
			background: rgba(${({theme}) => theme.primaryColor});
			padding: 5px;
			color: rgb(${colors.whiteColor});
			font-weight: 500;
			margin-bottom: 5px;
			padding: 8px 0;

			:hover {
				color: rgba(${colors.secondaryColor}, 1);
				transform: scale(1.02);
				transition: all 200ms ease-out;
			}

			span {
				padding-left: 1em;
				position: relative;

				svg {
					position: absolute;
					width: 20px;
					height: 20px;
					top: 2px;
					left: -10px;
				}
			}
		}
	}
`;
