import { useEffect, useState } from 'react';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { BiTask, BiTrash } from 'react-icons/bi';
import { TasksContainer } from '../styles/tasks';
import {
	getTasks,
	deleteTask,
	setCompletion,
} from '../services/tasks-services';

const Tasks = () => {
	const [tasksData, setTasksData] = useState([]);

	useEffect(() => {
		getTasks(setTasksData);
	}, []);

	// redirects to task previewer page within the selected task
	const redirect = (e) => {
		e.stopPropagation();
		window.location.assign(`/taskpreviewer/${e.target.id}`);
	};

	// return a peace of text based on task length
	const taskSlicer = (task) => {
		if (task.length >= 28) {
			return task.slice(0, 25) + '...';
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
					<Search btnURL={'/add/:id'} searchPlaceholder={'Search tasks'} />
				</div>
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

								<button onClick={e => deleteTask(e, getTasks, setTasksData)}>
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
