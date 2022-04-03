import styled from 'styled-components';

export const HeaderContainer = styled.section`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	z-index: 50;
	background: rgb(${({theme})=> theme.backgroundColor});
	box-shadow: 0 0 8px rgb(${({theme})=> theme.shadows});
	
	.logoSection {
		font-size: 1.6rem;
		font-weight: 500;
		position: relative;
		padding: 0.5em .3em;
		display: flex;
		justify-content: flex-end;
		gap: .5em;
		
		.logo {
			transform: rotate(0deg);
			width: 30px;
			height: 30px;
			color: rgb(${({theme})=> theme.primaryColor});
			position: absolute;
			left: 0.5em;
			top: 0.4em;
		}

		span {
			position: absolute;
			left: 1em;
			color: rgba(${({theme})=> theme.secondaryColor});
			padding-left: 1em;
		}

		button {
			border: none;
			border-style: node;
			background: none;
			border-radius: 5px;
			padding: 1px 5px;
			box-shadow: 0 0 5px rgb(${({theme})=> theme.shadows});
			outline: none;
			color: rgba(${({theme})=> theme.primaryColor}, 0.8);
			
			:hover {
				color: rgb(${({theme})=> theme.darkColor});
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
		@keyframes identifier {
			from {
				transform: translate(0, -3em);
				opacity: 0;
			}
			to {
				transform: translate(0, 0);
				opacity: 1;
			}
		}
		animation: identifier 500ms ease forwards;
		transition: 500ms ease;
		background-color: rgba(${({theme})=> theme.secondaryColor}, 0.3);
		backdrop-filter: blur(10px);
		padding: 1em;

		ul {
			display: flex;
			justify-content: center;
			text-align: center;
			flex-direction: column;
			padding: 0 5px;

			li {
				border: 2px solid transparent;
				padding: 5px 0;
				margin-bottom: 8px;
				font-weight: 500;
				text-transform: uppercase;
				border-radius: 5px;

				:hover {
					background: rgba(${({theme})=> theme.shadows}, .5);
				}

				a {
					position: relative;

					svg {
						width: 20px;
						height: 20px;
						position: absolute;
						left: -1.8em;
						top: 2px;
					}
				}
			}
		}
	}
`;
