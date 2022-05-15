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

		.action-buttons {
		display: flex;
		justify-content: flex-start;
		padding: 20px 0px;
		gap: 12px;

		button {
			border: none;
			border-style: none;
			background: none;
			padding: 8px 25px;
			border-radius: 5px;
			font-weight: 500;
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			position: relative;
			background: rgb(${({ theme }) => theme.whiteColor});
			width: 100%;
			max-width: 50%;
			margin: 0 auto;
			:hover {
				background: rgba(${({ theme }) => theme.secondaryColor}, .2);
				transition: all 200ms ease-out;
			}
			
			span {
				padding-left: 20px;
			}

			svg {
				color: rgb(${({ theme }) => theme.primaryColor});
				width: 20px;
				height: 20px;
				position: absolute;
				left: 15px;
				top: 7px;
			}

		}
	}
	}
`;
