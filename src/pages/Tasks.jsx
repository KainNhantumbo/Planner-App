import { useEffect, useState } from 'react';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { BiTask, BiTrash, BiWind } from 'react-icons/bi';
import { TasksContainer } from '../styles/tasks';
import {
	getTasks,
	deleteTask,
	setCompletion,
} from '../services/tasks-services';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { searchTasks } from '../services/tasks-services';

const Tasks = () => {
	// navigation
	const navigate = useNavigate();
	// stores tasks data
	const [tasksData, setTasksData] = useState([]);
	// gets data form the server on every render
	useEffect(() => {
		getTasks(setTasksData);
	}, []);

	// redirects to task previewer page within the selected task
	const redirect = (e) => {
		e.stopPropagation();
		navigate(`/taskpreviewer/${e.target.id}`);
	};

	// return a peace of text based on task length
	const taskSlicer = (task) => {
		if (task.length >= 25) {
			return task.slice(0, 23) + '...';
		} else {
			return task;
		}
	};

	// sets completed task styles
	const setTaskAppearence = (status) => {
		if (status === true)
			return {
				textDecoration: 'line-through',
				fontStyle: 'italic',
				opacity: 0.3,
			};
		return {};
	};

	return (
		<TasksContainer>
			<TitleBars title={'Tasks'} icon={<BiTask />} />
			<section>
				<div>
					<Search btnURL={'/add/:id'} searchPlaceholder={'Search tasks'} searchEvent={e=> searchTasks(e, setTasksData)} />
				</div>
				{tasksData.length < 1 ? (
					<Loading text={'Sem tarefas salvas.'} icon={<BiWind />} />
				) : null}
				<div className='task-container'>
					{tasksData.map(({ _id, task, completed }) => {
						return (
							<div key={_id} id={_id} onClick={redirect}>
								<button
									className='completion-btn'
									onClick={(e) =>
										setCompletion(e, completed, getTasks, setTasksData)
									}
								>
									<BiTask />
								</button>

								<span id='task' style={setTaskAppearence(completed)}>
									{taskSlicer(task)}
								</span>

								<button onClick={(e) => deleteTask(e, getTasks, setTasksData)}>
									<BiTrash />
								</button>
							</div>
						);
					})}
				</div>
			</section>
		</TasksContainer>
	);
};

export default Tasks;
