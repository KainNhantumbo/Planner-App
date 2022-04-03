import styled from 'styled-components';
import { colors } from './colors';

export const ContactsContainer = styled.section`
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

	div {
		margin-bottom: 1.2em;
		padding: 0 0.5em;
		color: rgb(${colors.primaryColor});
		position: relative;
		

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

		.addBtn {
			@keyframes btnMontion {
				from {
					transform: scale(1);
				}
				to {
					transform: scale(1.5);
				}
			}

			position: absolute;
			bottom: -30em;
			right: 2em;
			width: 40px;
			height: 40px;
			border: none;
			border-style: node;
			background: none;
			border-radius: 50%;
			padding: 1px 5px;
			box-shadow: 0 0 5px rgba(${colors.primaryColor}, 0.3);
			outline: none;
			color: rgba(${colors.primaryColor}, 0.8);
			display: grid;
			place-content: center;

			::before {
				content: '';
				background-color: rgba(${colors.secondaryColor}, 0.2);
				width: 40px;
				height: 40px;
				animation: btnMontion 900ms ease infinite;
				border-radius: 50%;
			}

			:hover {
				color: rgba(${colors.darkColor}, 0.3);
				transition: all 200ms ease-out;
			}

			svg {
				width: 35px;
				height: 35px;
				position: absolute;
				top: 2px;
				left: 2.5px;
			}
		}

		section {
			position: relative;
			display: flex;
			padding-top: 0.8em;

			input {
				width: 100%;
				max-width: 350px;
				border-style: none;
				border: none;
				padding: 5px 8px;
				border-radius: 5px;
				box-shadow: 0 0 5px rgba(${colors.darkColor}, 0.3);
				color: rgb(${colors.textColor});
				padding-left: 28px;

				:focus {
					box-shadow: 0 0 5px rgba(${colors.secondaryColor}, 0.9);
					outline: none;
				}
			}

			.searchIcon {
				position: absolute;
				left: 8px;
				top: 20px;
				color: rgb(${colors.secondaryColor});
			}
		}
	}

	.contact-section {
		position: relative;
		display: flex;
		border-radius: 5px;
		box-shadow: 0 0 5px rgba(${colors.darkColor}, 0.3);
		padding: 5px;
		cursor: pointer;
		gap: 0.5em;

		div {
			position: absolute;
			left: 1.2px;
			top: 5px;

			svg {
				width: 32px;
				height: 32px;
			}
		}

		section {
			padding: 8px;

			span {
				padding-left: 2em;
				word-wrap: break-word;
				color: rgb(${colors.textColor});
			}
		}
	}
`;
