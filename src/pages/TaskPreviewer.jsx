import { Container } from '../styles/taskPreviewer';
import TitleBars from '../components/TitleBars';
import { BiTaskX } from 'react-icons/bi';
const TaskPreviewer = () => {
	return (
		<Container>
			<TitleBars title={'Task Previewer'} icon={<BiTaskX/>} /> 
      <div></div>
		</Container>
	);
};

export default TaskPreviewer;
