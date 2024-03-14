import styled from 'styled-components';

export const HeaderContainer = styled.section`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 50;
	background: rgb(${({ theme }) => theme.whiteColor});
	box-shadow: 0 0 10px rgb(${({ theme }) => theme.shadows});

	.logoSection {
		font-size: 1.6rem;
		font-weight: 500;
		position: relative;
		padding: 0.5em 0.3em;
		display: flex;
		justify-content: flex-end;
		gap: 0.5em;

		.logo {
			transform: rotate(0deg);
			width: 30px;
			height: 30px;
			color: rgb(${({ theme }) => theme.primaryColor});
			position: absolute;
			left: 0.5em;
			top: 0.4em;
		}

		span {
			position: absolute;
			left: 1em;
			color: rgba(${({ theme }) => theme.secondaryColor});
			padding-left: 1em;
		}

		button {
			border: none;
			border-style: node;
			background: none;
			border-radius: 5px;
			padding: 1px 5px;
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			outline: none;
			color: rgba(${({ theme }) => theme.primaryColor}, 0.8);
			cursor: pointer;

			:hover {
				color: rgb(${({ theme }) => theme.darkColor});
				transition: all 200ms ease-out;
			}

			span {
				font-size: 0.5em;
				padding: 0;
				text-transform: uppercase;
				font-weight: 500;
			}

			svg {
				@keyframes svgSlide {
					from {
						transform: translate(0, 0.5em);
						opacity: 0;
					}
					to {
						transform: translate(0, 0);
						opacity: 1;
					}
				}
				width: 20px;
				height: 20px;
				animation: svgSlide 500ms ease-out forwards;
			}
		}
	}

	.navbar {
		width: 100%;
		position: fixed;
		height: 100vh;

		ul {
			@keyframes identifier {
				from {
					transform: translate(-40px, 0);
				}
				to {
					transform: translate(0, 0);
				}
			}
			animation: identifier 500ms ease forwards;
			transition: 500ms ease;
			background: rgba(${({ theme }) => theme.backgorundColor}, 0.3);
			height: 100vh;
			backdrop-filter: blur(10px);
			max-width: fit-content;
			box-shadow: 0 5px 5px rgb(${({ theme }) => theme.shadows});
			display: flex;
			justify-content: flex-start;
			flex-direction: column;

			li {
				width: 100%;
				font-weight: 500;
				text-transform: uppercase;
				position: relative;
				padding: 20px 10px;

				:hover {
					background: rgba(${({ theme }) => theme.shadows}, 0.5);

					svg {
						color: rgb(${({ theme }) => theme.secondaryColor});
					}
				}

				svg {
					width: 26px;
					height: 26px;
					position: absolute;
					left: 15px;
					top: 15px;
				}

				span {
					padding-left: 40px;
					padding-right: 15px;
					border-radius: 5px;
				}
			}
		}
	}
`;
