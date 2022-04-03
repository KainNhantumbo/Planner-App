import styled from 'styled-components';

export const TitleContainer = styled.div`
	margin: 12px 0;
	padding: 0 0.5em;
	color: rgb(${({ theme }) => theme.primaryColor});

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
`;
