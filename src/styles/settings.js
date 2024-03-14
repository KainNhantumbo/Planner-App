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

	margin: 0 auto;
	width: 100%;
	max-width: 350px;
	position: relative;

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
		cursor: pointer;

		:hover {
			box-shadow: 0 0 12px rgba(${({ theme }) => theme.shadows}, 0.8);
			transition: all 200ms ease-out;
		}

		span {
			position: relative;
			padding-left: 20px;
			pointer-events: none;
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

	.modal-container {
		position: absolute;
		z-index: 2000;
		width: 100%;
		height: 100%;
		background: rgba(${({ theme }) => theme.backgorundColor}, 0.3);
		backdrop-filter: blur(10px);
		display: grid;
		place-content: center;
		place-items: center;

		.advice {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding: 30px 10px;
			box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.whiteColor});
			border-radius: 5px;
			width: 90%;

			.actions {
				display: flex;
				flex-flow: row wrap;
				gap: 5px;
			}
		}
	}

	.page {
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: flex-start;

		.user-info,
		.about {
			display: flex;
			flex-direction: column;
			gap: 5px;
			padding: 0 8px;

			button:hover {
				span,
				svg {
					color: red;
				}
			}

			section {
				position: relative;
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				border-radius: 5px;
				box-shadow: 0 0 2px rgb(${({ theme }) => theme.shadows});
				padding: 10px;
				gap: 5px;
				position: relative;
				background: rgb(${({ theme }) => theme.whiteColor});

				span {
					font-weight: 500;
					margin: auto 0;
				}

				.info {
					display: flex;
					justify-content: space-between;
					gap: 20px;
					flex-direction: row;

					h3 {
						white-space: nowrap;
						svg {
							color: rgb(${({ theme }) => theme.secondaryColor});
						}
					}

					.data {
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						line-height: 1.4rem;
					}
				}
			}
		}

		.about {
			.info {
				line-height: 1.4rem;

				h3, span {
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
			}
		}
	}
`;
