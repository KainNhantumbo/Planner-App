import { useEffect, useState } from 'react';
import axios from 'axios';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { BiTask, BiTrash } from 'react-icons/bi';
import { TasksContainer } from '../styles/tasks';

const Tasks = () => {
	const [tasksData, setTasksData] = useState([]);

	// get all tasks from the server api
	const getTasks = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks`;
			const { data } = await axios({ method: 'get', url: url });
			setTasksData(() => data.data);
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		getTasks();
	}, []);

	// deletes a selected task
	const deleteTask = async (e) => {
		try {
			e.stopPropagation();
			const url = `http://localhost:4500/api/v1/tasks/${e.target.parentNode.id}`;
			const res = await axios({ method: 'delete', url: url });
			getTasks();
		} catch (e) {
			console.log(e);
		}
	};

	// redirects to task previewer page within the selected task
	const redirect = (e) => {
		e.stopPropagation();
		window.location.assign(`/taskpreviewer/${e.target.id}`);
	};

	const setCompletion = async (e, status) => {
		try {
			e.stopPropagation();
			let statusData;
			const taskID = e.target.parentNode.id;
			const url = `http://localhost:4500/api/v1/tasks/${taskID}`;

			if (status === true) {
				statusData = false;
			} else {
				statusData = true;
			}

			const res = await axios({
				method: 'patch',
				url: url,
				data: { completed: statusData },
			});

			getTasks();
		} catch (e) {
			console.log(e);
		}
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
									onClick={(e) => setCompletion(e, completed)}
								>
									<BiTask />
								</button>

								<span id='task' style={setTaskAppearence(completed)}>
									{taskSlicer(task)}
								</span>

								<button onClick={deleteTask}>
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
