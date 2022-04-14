import { BiTask, BiTrash } from 'react-icons/bi';
import axios from 'axios';
import TitleBars from '../components/TitleBars';
import Search from '../components/Search';
import { TasksContainer } from '../styles/tasks';
import { useEffect, useState } from 'react';

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

	// redirects to task previewer page within the selected task
	const redirect = (e) => {
		e.stopPropagation();
		window.location.assign(`/taskpreviewer/${e.target.id}`);
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
								<BiTask className='task-icon' />

								<span id='task'>{task}</span>

								<button>
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
