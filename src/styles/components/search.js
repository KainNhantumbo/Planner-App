import styled from 'styled-components';

export const SearchContainer = styled.div`
	margin-bottom: 1.2em;
	padding: 0 0.5em;
	color: rgb(${({ theme }) => theme.primaryColor});
	position: relative;

	.addBtn {
		@keyframes btnMontion {
			from {
				transform: scale(1);
				opacity: 0.2;
			}
			to {
				transform: scale(1.5);
				opacity: 0.25;
			}
		}

		position: absolute;
		bottom: -2px;
		right: 0.5em;
		width: 40px;
		height: 32px;
		border: none;
		border-style: node;
		background: none;
		border-radius: 5px;
		padding: 1px 5px;
		box-shadow: 0 0 5px rgba(${({ theme }) => theme.primaryColor}, 0.3);
		outline: none;
		color: rgba(${({ theme }) => theme.textColor}, 0.8);
		background: rgb(${({ theme }) => theme.whiteColor});
		display: grid;
		place-content: center;
		z-index: 55;

		::before {
			content: '';
			background-color: rgba(${({ theme }) => theme.secondaryColor}, 0.2);
			width: 40px;
			height: 32px;
			animation: btnMontion 1200ms ease infinite;
			border-radius: 5px;
		}

		:hover {
			color: rgba(${({ theme }) => theme.darkColor}, 0.3);
			transition: all 200ms ease-out;
		}

		svg {
			width: 30px;
			height: 30px;
			position: absolute;
			top: 1px;
			left: 5.5px;
		}
	}

	section {
		position: relative;
		display: flex;

		input {
			width: 80%;
			max-width: 350px;
			border-style: none;
			border: none;
			padding: 5px 8px;
			border-radius: 5px;
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			color: rgb(${({ theme }) => theme.textColor});
			padding-left: 28px;
			background: rgb(${({ theme }) => theme.backgroundColor});

			:focus {
				box-shadow: 0 0 5px rgba(${({ theme }) => theme.secondaryColor}, 0.9);
				outline: none;
			}
			::placeholder {
				font-weight: 500;
			}
		}

		.searchIcon {
			position: absolute;
			left: 8px;
			top: 7px;
			color: rgb(${({ theme }) => theme.secondaryColor});
		}
	}
`;
