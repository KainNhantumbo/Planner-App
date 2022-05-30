import styled from 'styled-components';

export const TasksContainer = styled.div`
	@keyframes enterAnime {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	animation: enterAnime 300ms ease-out forwards;

	width: 100%;
	max-width: 350px;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	margin-bottom: 20px;

	.task-container {
		display: flex;
		flex-direction: column-reverse;
		gap: 15px;
		padding: 0 8px;

		div {
			position: relative;
			display: flex;
			border-radius: 5px;
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			padding: 15px 8px;
			cursor: pointer;
			gap: 0.5em;
			position: relative;
			background: rgb(${({ theme }) => theme.whiteColor});

			:hover {
				box-shadow: 0 0 10px 1px rgb(${({ theme }) => theme.shadows});
				transition: 200ms ease;
			}

			span {
				font-weight: 500;
				margin: auto 28px;
				pointer-events: none;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				line-height: 1.4rem;
			}

			.completion-btn {
				position: absolute;
				top: 15px;
				left: 8px;
				width: 20px;
				height: 22px;
				display: grid;
				place-items: center;

				svg {
					position: absolute;
					width: 20px;
					height: 20px;
					pointer-events: none;
				}
			}

			button {
				position: absolute;
				top: 11px;
				right: 5px;
				width: 30px;
				height: 30px;
				border: none;
				border-style: node;
				background: none;
				border-radius: 5px;
				padding: 1px 5px;
				box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
				outline: none;
				color: rgba(${({ theme }) => theme.primaryColor}, 0.8);
				display: grid;
				place-items: center;

				:hover {
					color: rgb(${({ theme }) => theme.darkColor});
					transition: all 200ms ease-out;
				}

				svg {
					width: 20px;
					height: 20px;
					pointer-events: none;
				}
			}
		}
	}
`;
