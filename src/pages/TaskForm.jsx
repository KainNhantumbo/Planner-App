import { FormContainer } from '../styles/taskForm';
import TitleBars from '../components/TitleBars';
import {
	BiNote,
	BiPlus,
	BiSave,
	BiStats,
  BiXCircle,
} from 'react-icons/bi';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TaskForm = () => {
	const [message, setMessage] = useState('Save');
	const [taskInputValue, setTaskInputValue] = useState('');
	const [statusInput, setStatusInput] = useState(false);
	const [opStatus, setOpStatus] = useState('');

	// takes id parameter
	const { id: taskID } = useParams();

	const saveTask = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks`;
			const res = await axios({
				method: 'post',
				url: url,
				data: { task: taskInputValue, completed: statusInput },
			});
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	const taskPatcher = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
			const res = await axios({
				method: 'patch',
				url: url,
				data: { task: taskInputValue, completed: statusInput },
			});
			console.log(res);
		} catch (e) {
			console.log(e);
		}
	};

	// gets a single task by id, if present
	const getTask = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
			const { data } = await axios({ url });
			setStatusInput(() => data.completed);
			setTaskInputValue(() => data.task);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (taskID !== ':id') {
			setMessage(() => 'Update');
		}
	}, []);

	// saves the task
	const taskHandler = () => {
		saveTask();
	};

	// discards the unsaved task
	const discardTask = () => {};

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
					<BiXCircle />
					<span>Discard</span>
				</button>
			</div>
			<div className='op-status'>{opStatus}</div>
		</FormContainer>
	);
};

export default TaskForm;
