import { FormContainer } from '../styles/taskForm';
import TitleBars from '../components/TitleBars';
import {
	BiLeftArrowAlt,
	BiNote,
	BiPlus,
	BiSave,
	BiStats,
} from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { saveTask, getTask, taskPatcher } from '../services/tasks-services';

const TaskForm = () => {
	const [message, setMessage] = useState('Save');
	const [taskInputValue, setTaskInputValue] = useState('');
	const [statusInput, setStatusInput] = useState(false);

	// takes id parameter
	const { id: taskID } = useParams();

	useEffect(() => {
		if (taskID !== ':id') {
			setMessage(() => 'Update');
			getTask(setTaskInputValue, setStatusInput, taskID);
		}
	}, []);

	// saves the task
	const taskHandler = () => {
		if (taskID === ':id') {
			return saveTask(taskInputValue, statusInput, setMessage);
		} else {
			taskPatcher(setMessage, taskInputValue, statusInput, taskID);
		}
		window.location.assign('/');
	};

	// discards changes and goes back to previous page
	const discardTask = () => window.history.back();

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
					<span>Get Back</span>
				</button>
			</div>
		</FormContainer>
	);
};

export default TaskForm;
