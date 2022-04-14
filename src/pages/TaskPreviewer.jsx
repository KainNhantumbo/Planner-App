import React, { useState, useEffect } from 'react';
import TitleBars from '../components/TitleBars';
import axios from 'axios';
import { Container } from '../styles/taskPreviewer';
import { BiTaskX } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

const TaskPreviewer = () => {
	const [status, setStatus] = useState('Completed');
	const [task, setTask] = useState('');

	const { id: taskID } = useParams();

	// gets a single task by id, if present
	const getTask = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
			const { data } = await axios({ url });
			setStatus(() => data.data.completed);
			setTask(() => data.data.task);
			console.log(data);
		} catch (e) {
			console.log(e);
		}
	};

	const handleStatus = () => {
		if (status === true) return 'Completed';
		return 'Uncompleted';
	};

	useEffect(() => {
		getTask();
	}, []);

  // redirects to edit and add tasks page
	const redirectToEdit = () => window.location.assign(`/add/${taskID}`);

  // redirects to tasks page
	const redirectToTasks = () => window.location.assign('/');

	return (
		<Container>
			<TitleBars title={'Task Previewer'} icon={<BiTaskX />} />
			<section>
				<label htmlFor='task-content'>
					<span>Task</span>
				</label>
				<div id='task-content'>{task}</div>
				<label htmlFor='status'>
					<span>Status</span>
				</label>
				<div id='status'>{handleStatus()}</div>
			</section>
			<div className='actions'>
				<button onClick={redirectToEdit}>
					<span>Edit Task</span>
				</button>
				<button onClick={redirectToTasks}>
					<span>Get Back</span>
				</button>
			</div>
		</Container>
	);
};

export default TaskPreviewer;
