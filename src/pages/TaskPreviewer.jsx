import TitleBars from '../components/TitleBars';
import { Container } from '../styles/taskPreviewer';
import { useState, useEffect } from 'react';
import { BiEdit, BiLeftArrowAlt, BiTask } from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask } from '../services/tasks-services';

const TaskPreviewer = () => {
	const navigate = useNavigate();
	const [task, setTask] = useState('');
	const { id: taskID } = useParams();
	const [status, setStatus] = useState(false);

	useEffect(() => {
		getTask(setTask, setStatus, taskID);
	}, []);

	return (
		<Container>
			<TitleBars title={'Task Previewer'} icon={<BiTask />} />
			<section>
				<ul>
					<li>
						<span>Task</span>
						<div>{task}</div>
					</li>
					<li>
						<span>Status</span>
						<div>{status ? 'Completed' : 'Uncompleted'}</div>
					</li>
				</ul>
			</section>
			<div className='action-buttons'>
				<button onClick={() => navigate(`/add/${taskID}`)}>
					<BiEdit />
					<span>Edit</span>
				</button>
				<button onClick={() => navigate('/')}>
					<BiLeftArrowAlt />
					<span>Back</span>
				</button>
			</div>
		</Container>
	);
};

export default TaskPreviewer;
