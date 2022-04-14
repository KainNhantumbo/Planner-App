import { FormContainer } from '../styles/taskForm';
import TitleBars from '../components/TitleBars';
import { BiTask } from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const TaskForm = () => {
	const [message, setMessage] = useState('Save');
	const [taskInputValue, setTaskInputValue] = useState('');
	const [statusInput, setStatusInput] = useState(false);

	// takes id parameter
	const { id: taskID } = useParams();

	useEffect(() => {
		if (taskID !== ':id') {
			setMessage(() => 'Update');
		}
	}, []);

	// saves the task
	const taskSaver = () => {};

	// discards the unsaved task
	const discardTask = () => {};

	return (
		<FormContainer>
			<TitleBars title={'Add Task'} icon={<BiTask />} />
			<section>
				<label htmlFor='task'>Add a new task</label>
				<input
					type='text'
					name='task'
					id='task'
					defaultValue={taskInputValue}
					onChange={(e) => setTaskInputValue(() => e.target.value)}
				/>
				<label htmlFor='status'>Status: completed?</label>
				<input
					type='checkbox'
					id='status'
					name='status'
					defaultValue={statusInput}
					onChange={(e) => setStatusInput(() => e.target.value)}
				/>
			</section>
			<div className='actions'>
				<button onClick={taskSaver}>
					<span>{message}</span>
				</button>
				<button onClick={discardTask}>
					<span>Discard</span>
				</button>
			</div>
		</FormContainer>
	);
};

export default TaskForm;
