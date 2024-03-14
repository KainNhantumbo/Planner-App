import { LoadingContainer as Container } from '../styles/components/loading';

const Loading = ({ text, icon }) => (
	<Container>
		<div>
			{icon}
			<h3>{text}</h3>
		</div>
	</Container>
);

export default Loading;
