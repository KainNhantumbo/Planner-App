import React, { useState, useEffect } from 'react';
import TitleBars from '../components/TitleBars';
import { Container } from '../styles/taskPreviewer';
import {  BiEdit, BiLeftArrowAlt, BiTask } from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask } from '../services/tasks-services';

const TaskPreviewer = () => {
	const [status, setStatus] = useState('Completed');
	const [task, setTask] = useState('');

	// gets url id parameter as taskID
	// from urlParams object
	const { id: taskID } = useParams();

	// navigation
	const navigate = useNavigate();

  // shows the status of task, if it's false or true
	const handleStatus = () => {
		if (status === true) return 'Completed';
		return 'Uncompleted';
	};

  // loads the page with designed task
	useEffect(() => {
		getTask(setTask, setStatus, taskID);
	}, []);

	// redirects to edit and add tasks page
	const redirectToEdit = () => navigate(`/add/${taskID}`);

	// redirects to tasks page
	const redirectToTasks = () => navigate('/');

	return (
		<Container>
			<TitleBars title={'Task Previewer'} icon={<BiTask />} />
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
					<span>Edit</span>
				</button>
				<button onClick={redirectToTasks}>
					<BiLeftArrowAlt />
					<span>Back</span>
				</button>
			</div>
		</Container>
	);
};

export default TaskPreviewer;
