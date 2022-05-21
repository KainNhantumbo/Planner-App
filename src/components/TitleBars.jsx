import { TitleContainer } from '../styles/components/titleBars';

const TitleBars = ({ icon, title, amount = null }) => {
	return (
		<TitleContainer>
			<span>
				{icon}
				{title}
			</span>
			{amount ? <span>{amount} Items</span> : null}
		</TitleContainer>
	);
};

export default TitleBars;
