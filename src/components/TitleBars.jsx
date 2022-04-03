import { TitleContainer } from "../styles/components/titleBars";

const TitleBars = ({icon, title}) => {
	return (
		<TitleContainer>
			<span>
				{icon}
				{title}
			</span>
		</TitleContainer>
	);
};

export default TitleBars;
