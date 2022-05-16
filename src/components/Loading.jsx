import { LoadingContainer } from '../styles/components/loading';

const Loading = ({ text, icon }) => {
	return (
		<LoadingContainer>
			<div>
				{icon}
				<h2>{text}</h2>
			</div>
		</LoadingContainer>
	);
};

export default Loading;
