import { BiTask } from 'react-icons/bi';
import TitleBars from '../components/TitleBars';
import { TasksContainer } from '../styles/tasks';


const Tasks = () => {
	return (
		<TasksContainer>
			<TitleBars title={'Tasks'} icon={<BiTask/>}/>
			<section>
				<div className='task-container'>
					
				</div>
			</section>
		</TasksContainer>
	);
};

export default Tasks;
