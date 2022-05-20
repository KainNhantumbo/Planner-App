import styled from "styled-components";

export const SettingsContainer = styled.section`
	@keyframes enterAnime {
		from {
			transform: translateY(60px);
		}
		to {
			transform: translateY(0px);
		}
	}
	animation: enterAnime 300ms ease-out forwards;
	padding: 0.5em;
	margin: 0 auto;
	width: 100%;
	max-width: 350px;
	position: relative;
`