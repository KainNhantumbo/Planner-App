import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	z-index: 100;
	position: fixed;
	padding: 0 10px;
	top: 0;
	left: 0;
	background: rgba(${({ theme }) => theme.background});
	backdrop-filter: blur(100px);
	display: flex;
	flex-direction: column;
	gap: 20px;

	p,
	label,
	h3 {
		font-weight: 500;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-flow: column nowrap;
		position: relative;
		margin: 0 auto;
		gap: 10px;

		span {
			padding: 20px 0;
			position: relative;
			color: rgb(${(theme) => theme.textColor});
			font-weight: 500;
			font-size: 18pt;

			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				top: 18px;
				left: -35px;
				color: rgb(${({ theme }) => theme.primaryColor});
			}
		}

		p {
			color: rgb(${({ theme }) => theme.textColor});
			text-align: center;
			line-height: 1.4rem;
		}
	}

	article {
		width: 100%;
		max-width: 350px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 10px;

		form {
			display: flex;
			flex-flow: column nowrap;
			padding: 0 0.5em;
			gap: 5px;

			label {
				margin-bottom: 0.3em;
				margin-top: 5px;
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
				background: rgb(${({ theme }) => theme.inner});
				box-shadow: 0 0 10px rgba(${({ theme }) => theme.shadows});
				border-radius: 5px;
				padding: 8px 10px;
				outline: none;
			}

			.errorMessage {
				color: red;
				font-size: 0.9rem;
				margin: 5px 0;
			}

			section {
				display: flex;
				flex-direction: row;
				gap: 10px;

				@media screen and (max-width: 350px) {
					flex-direction: column;
				}
			}

			button {
				border: none;
				border-style: none;
				border-radius: 5px;
				background: rgba(${({ theme }) => theme.whiteColor});
				box-shadow: 0 0 10px rgba(${({ theme }) => theme.shadows});
				padding: 5px;
				color: rgb(${({ theme }) => theme.textColor});
				font-weight: 500;
				margin-bottom: 5px;
				padding: 8px 0;
				cursor: pointer;

				:hover {
					transform: scale(1.02);
					color: rgb(${({ theme }) => theme.secondaryColor});
					background: rgba(${({ theme }) => theme.secondaryColor}, 0.2);
					transition: all 200ms ease-out;
				}
			}
		}
	}

	footer {
		width: 100%;
		margin: 0 auto;
		position: fixed;
		bottom: 10px;
		text-align: center;
		font-weight: 500;
		color: rgb(${({ theme }) => theme.textColor});
	}
`;
