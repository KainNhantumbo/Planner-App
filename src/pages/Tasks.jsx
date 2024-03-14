import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import Loading from '../components/Loading';
import { useNavigate } from 'react-router-dom';
import { searchTasks } from '../services/tasks-services';
import { useEffect, useState } from 'react';
import { BiTask, BiTrash, BiWind } from 'react-icons/bi';
import { TasksContainer as Container } from '../styles/tasks';
import {
	getTasks,
	deleteTask,
	setCompletion,
} from '../services/tasks-services';

const Tasks = () => {
	const navigate = useNavigate();
	const [tasksData, setTasksData] = useState([]);

	const redirect = (e) => {
		e.stopPropagation();
		navigate(`/taskpreviewer/${e.target.id}`);
	};
	
	// sets completed task styles
	const renderStyles = (status) => {
		if (status)
		return {
			textDecoration: 'line-through',
				fontStyle: 'italic',
				opacity: 0.3,
			};
			return {};
		};

		useEffect(() => {
			getTasks(setTasksData);
		}, []);
		
		return (
			<Container>
			<TitleBars title={'Tasks'} icon={<BiTask />} amount={tasksData.length} />
			<Search
				btnURL={'/add/:id'}
				title={'Add new task'}
				searchPlaceholder={'Search tasks'}
				searchEvent={(e) => searchTasks(e, setTasksData)}
			/>
			{tasksData.length < 1 && (
				<Loading text={'No tasks to show.'} icon={<BiWind />} />
			)}

			<section className='task-container'>
				{tasksData.map(({ _id, task, completed }) => (
					<div key={_id} id={_id} onClick={redirect}>
						<button
							className='completion-btn'
							onClick={(e) =>
								setCompletion(e, completed, getTasks, setTasksData)
							}
						>
							<BiTask />
						</button>
						<span id='task' style={renderStyles(completed)}>
							{task}
						</span>
						<button
							title='Delete task'
							onClick={(e) => deleteTask(e, getTasks, setTasksData)}
						>
							<BiTrash />
						</button>
					</div>
				))}
			</section>
		</Container>
	);
};

export default Tasks;
