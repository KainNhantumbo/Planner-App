import styled from 'styled-components';

export const TitleContainer = styled.div`
	margin: 12px 0;
	padding: 0 0.5em;

	span {
		position: relative;
		padding: 0 1.2em;
		font-weight: 500;
		color: rgb(${({ theme }) => theme.textColor});

		svg {
			position: absolute;
			left: 2px;
			stroke-width: 1px;
			color: rgb(${({ theme }) => theme.secondaryColor});
		}
	}
`;
