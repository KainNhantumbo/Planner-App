import { TitleContainer as Container } from '../styles/components/titleBars';

const TitleBars = ({ icon, title, amount = null }) => (
	<Container>
		<span>
			{icon}
			{title}
		</span>
		{amount && <span>{amount} Items</span>}
	</Container>
);

export default TitleBars;
