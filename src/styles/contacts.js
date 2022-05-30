import styled from 'styled-components';

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
		color: rgb(${({ theme }) => theme.primaryColor});
		position: relative;
	}

	.contact-section {
		position: relative;
		display: flex;
		border-radius: 5px;
		box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
		padding: 5px;
		cursor: pointer;
		gap: 0.5em;
		background: rgb(${({ theme }) => theme.whiteColor});
		:hover {
			box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});
			transition: 200ms ease;
		}

		div {
			position: absolute;
			left: 0;
			top: 8px;
			pointer-events: none;

			svg {
				width: 28px;
				height: 28px;
			}
		}

		section {
			padding: 8px;
			pointer-events: none;
			overflow: hidden;
			text-overflow: ellipsis;
			span {
				padding-left: 2em;
				white-space: nowrap;
				color: rgb(${({ theme }) => theme.textColor});
				pointer-events: none;
			}
		}
	}
`;
