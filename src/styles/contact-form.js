import styled from 'styled-components';

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

	form {
		display: flex;
		flex-flow: column nowrap;
		padding: 0 0.5em;

		label {
			margin-bottom: 0.3em;
			font-weight: 500;
			position: relative;
			padding-left: 1.2em;

			svg {
				position: absolute;
				left: 2px;
				stroke-width: 0.2px;
				color: rgb(${({ theme }) => theme.primaryColor});
			}
		}

		input {
			margin-bottom: 0.8em;
			border-style: none;
			color: rgb(${({ theme }) => theme.textColor});
			background: rgb(${({ theme }) => theme.whiteColor});
			box-shadow: 0 0 5px rgba(${({ theme }) => theme.shadows});
			border-radius: 5px;
			padding: 5px 8px;
			outline: none;
		}

		button {
			border: none;
			border-style: none;
			border-radius: 5px;
			background: rgba(${({ theme }) => theme.backgroundColor});
			box-shadow: 0 0 10px rgba(${({ theme }) => theme.shadows});
			padding: 5px;
			color: rgb(${({ theme }) => theme.textColor});
			font-weight: 500;
			margin-bottom: 10px;
			background: rgb(${({ theme }) => theme.whiteColor});
			padding: 8px 0;
			cursor: pointer;

			:hover {
				transform: scale(1.02);
				color: rgb(${({ theme }) => theme.secondaryColor});
				transition: all 200ms ease-out;
			}

			span {
				padding-left: 20px;
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
