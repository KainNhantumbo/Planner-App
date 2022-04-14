import React, { useState, useEffect } from 'react';
import TitleBars from '../components/TitleBars';
import axios from 'axios';
import { Container } from '../styles/taskPreviewer';
import { BiChevronLeft, BiEdit, BiLeftArrow, BiLeftArrowAlt, BiTaskX } from 'react-icons/bi';
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
				<ul>
					<li>
						<span>Task</span>
						<div></div>
						{task}
					</li>
					<li>
						<span>Status</span>
						<div>{handleStatus()}</div>
					</li>
				</ul>
			</section>
			<div className='action-buttons'>
				<button onClick={redirectToEdit}>
					<BiEdit />
					<span>Edit Task</span>
				</button>
				<button onClick={redirectToTasks}>
					<BiLeftArrowAlt />
					<span>Get Back</span>
				</button>
			</div>
		</Container>
	);
};

export default TaskPreviewer;
