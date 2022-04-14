import styled from 'styled-components';

export const FormContainer = styled.article`
	@keyframes enterAnime {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	animation: enterAnime 300ms ease-out forwards;
	padding: 0.5em;
	margin: 0 auto;
	width: 100%;
	max-width: 350px;
	position: relative;

	section {
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
			border-style: none;
			color: rgb(${({ theme }) => theme.textColor});
			background: rgb(${({ theme }) => theme.whiteColor});
			box-shadow: 0 0 5px rgba(${({ theme }) => theme.shadows});
			border-radius: 5px;
			padding: 8px 10px;
			outline: none;
		}
	}

	.action-buttons {
		display: flex;
		justify-content: center;
		padding: 20px 0px;
		gap: 12px;

		button {
			border: none;
			border-style: none;
			background: none;
			padding: 8px 25px;
			border-radius: 5px;
			font-weight: 500;
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			position: relative;

			:hover {
				background: rgba(${({ theme }) => theme.secondaryColor}, 0.2);
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
`;
