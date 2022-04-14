import { FormContainer } from '../styles/taskForm';
import TitleBars from '../components/TitleBars';
import { BiTask } from 'react-icons/bi';

const TaskForm = () => {
	return (
		<FormContainer>
			<TitleBars title={'Add Task'} icon={<BiTask />} />
		</FormContainer>
	);
};

export default TaskForm;
