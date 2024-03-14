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
		display: flex;
		flex-direction: column;
		margin-top: 28px;

		label {
			margin-bottom: 0.3em;
			font-weight: 500;
			position: relative;
			padding-left: 1.2em;
			margin-bottom: 12px;

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
			background: rgb(${({ theme }) => theme.inner});
			box-shadow: 0 0 5px rgba(${({ theme }) => theme.shadows});
			border-radius: 5px;
			padding: 8px 10px;
			outline: none;
		}

		div {
			display: flex;
			justify-content: flex-start;
			margin-top: 28px;
			gap: 15px;
			position: relative;
			width: 100%;

			input[type='checkbox'] {
				position: absolute;
				top: -5px;
				right: 30px;
				width: 45px;
				height: 10px;
				appearance: none;
				-moz-appearance: none;

				outline: none;
				border-radius: 15px;
				box-shadow: inset 0 0 5px rgba(${({ theme }) => theme.shadows}, 0.5);
				transition: 0.5s ease;
				margin-top: 0.4em;
				margin-right: 0.2em;

				:checked {
					background: rgba(${({ theme }) => theme.inner});
				}

				::after {
					content: '';
					position: absolute;
					width: 18px;
					height: 18px;
					transform: scale(1.1);
					border-radius: 50%;
					top: -1px;
					left: 0;
					background: rgba(${({ theme }) => theme.inner});
					box-shadow: 0 0 10px rgba(${({ theme }) => theme.shadows});
					transition: all 0.2s ease;
				}

				:checked::after {
					transform: scale(1.1) translateX(25px);
					background: rgba(${({ theme }) => theme.secondaryColor});
				}
			}
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
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			position: relative;
			background: rgb(${({ theme }) => theme.whiteColor});
			width: 100%;


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
