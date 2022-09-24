import { FormContainer } from '../styles/taskForm';
import TitleBars from '../components/TitleBars';
import {
	BiLeftArrowAlt,
	BiNote,
	BiPlus,
	BiSave,
	BiStats,
} from 'react-icons/bi';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { saveTask, getTask, taskPatcher } from '../services/tasks-services';

const TaskForm = () => {
	const [message, setMessage] = useState('Save');
	const [taskInputValue, setTaskInputValue] = useState('');
	const [statusInput, setStatusInput] = useState(false);
	const { id: taskID } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (taskID !== ':id') {
			setMessage(() => 'Update');
			getTask(setTaskInputValue, setStatusInput, taskID);
		}
	}, []);

	// saves the task
	const taskHandler = () => {
		if (taskID === ':id') {
			saveTask(taskInputValue, statusInput, setMessage);
			navigate('/');
			return;
		} else {
			taskPatcher(setMessage, taskInputValue, statusInput, taskID);
		}
		navigate('/');
	};

	// discards changes and goes back to previous page
	const discardTask = () => navigate('/');

	return (
		<FormContainer>
			<TitleBars title={'Add Task'} icon={<BiPlus />} />
			<section>
				<label htmlFor='task'>
					<BiNote /> New task
				</label>
				<input
					type='text'
					name='task'
					id='task'
					placeholder='Type a new task here...'
					defaultValue={taskInputValue}
					onChange={(e) => setTaskInputValue(() => e.target.value)}
				/>
				<div>
					<label htmlFor='status'>
						<BiStats /> Status of completion
					</label>
					<input
						type='checkbox'
						id='status'
						name='status'
						checked={statusInput}
						onChange={(e) => setStatusInput(() => e.target.checked)}
					/>
				</div>
			</section>
			<div className='action-buttons'>
				<button onClick={taskHandler}>
					<BiSave />
					<span>{message}</span>
				</button>
				<button onClick={discardTask}>
					<BiLeftArrowAlt />
					<span>Back</span>
				</button>
			</div>
		</FormContainer>
	);
};

export default TaskForm;
