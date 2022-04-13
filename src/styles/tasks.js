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

  .task-container {
    position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
		padding: 5px;
		cursor: pointer;
		gap: 0.5em;
  }
`;
