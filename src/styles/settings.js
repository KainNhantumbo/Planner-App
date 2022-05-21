import styled from 'styled-components';

export const SettingsContainer = styled.section`
	@keyframes enterAnime {
		from {
			transform: translateY(60px);
		}
		to {
			transform: translateY(0px);
		}
	}
	animation: enterAnime 300ms ease-out forwards;
	padding: 0.5em;
	margin: 0 auto;
	width: 100%;
	max-width: 350px;
	position: relative;

	.page {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: flex-start;

		h3 {
			position: relative;
			line-height: 1.6rem;
			font-weight: 500;
			padding-left: 20px;

			svg {
				position: absolute;
				top: 5px;
				left: 0;
				color: rgb(${({ theme }) => theme.primaryColor});
			}
		}

		button {
			border: none;
			border-style: none;
			background: none;
			padding: 8px 25px;
			border-radius: 5px;
			font-weight: 500;
			box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			background: rgb(${({ theme }) => theme.whiteColor});
			width: 100%;
			margin-top: 10px;

			:hover {
				background: rgba(${({ theme }) => theme.secondaryColor}, 0.2);
				box-shadow: 0 0 12px rgba(${({ theme }) => theme.shadows}, 0.8);
				transition: all 200ms ease-out;

				span,
				svg {
					color: red;
				}
			}

			span {
				position: relative;
				padding-left: 20px;
				svg {
					color: rgb(${({ theme }) => theme.primaryColor});
					width: 20px;
					height: 20px;
					position: absolute;
					left: -5px;
					top: 0px;
				}
			}
		}

		.user-info,
		.about {
			display: flex;
			flex-direction: column;
			gap: 5px;
			padding: 0 8px;

			section {
				position: relative;
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				border-radius: 5px;
				box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
				padding: 10px;
				gap: 12px;
				position: relative;
				background: rgb(${({ theme }) => theme.whiteColor});

				span {
					font-weight: 500;
					margin: auto 0;
				}

				.info {
					display: flex;
					justify-content: space-between;
					gap: 5px;
					flex-direction: row;
				}
			}
		}

		.about {
			div {
				span {
					padding-left: 12px;
				}
			}
		}
	}
`;
