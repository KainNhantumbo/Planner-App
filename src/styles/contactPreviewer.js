import styled from 'styled-components';

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

	section {
		color: rgb(${({ theme }) => theme.textColor});
		margin-top: 15px;

		ul,
		li {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 15px;

			li {
				border-radius: 10px;
				gap: 5px;
				padding: 8px 10px;
				box-shadow: 0 0 5px rgba(${({ theme }) => theme.shadows});

				span {
					font-weight: 500;
					padding: 5px;
					background: rgba(${({ theme }) => theme.secondaryColor}, 0.3);
					border-radius: 5px;
				}
			}
		}
	}
`;
