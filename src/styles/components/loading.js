import styled from 'styled-components';

export const LoadingContainer = styled.section`
	padding: 0.5em;
	margin: 0 auto;
	width: 100%;
	min-height: 50vh;
	max-width: 350px;
	position: relative;
	display: grid;
	place-content: center;
	place-items: center;
	user-select: none;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 10px;

		svg {
			width: 70px;
			height: 70px;
			color: rgb(${({ theme }) => theme.secondaryColor});
		}

		h3 {
			line-height: 4rem;
			font-weight: 500;
			font-size: 1.2rem;
			color: rgb(${({ theme }) => theme.textColor});
		}
	}
`;
