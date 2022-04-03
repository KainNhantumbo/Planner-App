import styled from 'styled-components';
import { colors } from './colors';

export const Container = styled.article`
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

	.head {
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
	}

	section {
		color: rgb(${colors.textColor});

		ul,
		li {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 15px;

			li {
				border-radius: 10px;
				gap: 5px;
				padding: 8px 8px;
				box-shadow: 0 0 5px rgba(${colors.darkColor}, 0.3);

				span {
					font-weight: 500;
					padding: 5px;
					background: rgba(${colors.secondaryColor}, 0.3);
					border-radius: 5px;
				}
			}
		}
	}
`;
