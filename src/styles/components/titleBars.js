import styled from 'styled-components';

export const TitleContainer = styled.div`
	margin: 12px 0;
	padding: 0 0.5em;
	display: flex;
	justify-content: space-between;

	span {
		position: relative;
		padding-left: 25px;
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
