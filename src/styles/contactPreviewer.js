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
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			position: relative;
			
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
`;
