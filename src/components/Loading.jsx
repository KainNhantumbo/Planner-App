import { LoadingContainer } from '../styles/components/loading';

const Loading = ({ text, icon }) => {
	return (
		<LoadingContainer>
			<div>
				{icon}
				<h3>{text}</h3>
			</div>
		</LoadingContainer>
	);
};

export default Loading;
