import styled from 'styled-components';

export const HeaderContainer = styled.section`
	.logoSection {
		font-size: 1.6rem;
		font-weight: 500;
		position: relative;
		padding: 0.5em 1em;
		display: flex;
		justify-content: space-between;

		.logo {
			transform: rotate(0deg);
			width: 30px;
			height: 30px;
			color: rebeccapurple;
			position: absolute;
			left: 0.5em;
			top: 0.4em;
		}

		span {
			color: royalblue;
			padding-left: 1em;
		}

		button {
			border: none;
			border-style: node;
			background: none;
			border-radius: 5px;
			padding: 1px 5px;
			box-shadow: 0 0 5px powderblue;

			:hover {
				color: powderblue;
				transition: all 200ms ease-out;
			}

			span {
				font-size: 0.5em;
				padding: 0;
				text-transform: uppercase;
				font-weight: 500;
			}
			svg {
				width: 20px;
				height: 20px;
			}
		}
	}

	.navbar {
		@keyframes identifier {
			from {
				transform: translate(-20em, 0);
			}
			to {
				transform: translate(0, 0);
			}
		}

		animation: identifier 500ms ease forwards;


		ul {
			display: flex;
			justify-content: center;
			text-align: center;
			flex-direction: column;
			padding: 0 5px;

			li {
				border: 2px solid powderblue;
				padding: 5px 0;
				margin-bottom: 8px;
				font-weight: 500;
				text-transform: uppercase;
				border-radius: 5px;
				position: relative;

				:hover {
					background: powderblue;
					border-bottom: 2px solid powderblue;
				}

				svg {
					width: 20px;
					height: 20px;
					position: absolute;
					left: 9em;
				}
			}
		}
	}
`;
