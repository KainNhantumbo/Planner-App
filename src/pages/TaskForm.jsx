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
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const TaskForm = () => {
	const [message, setMessage] = useState('Save');
	const [taskInputValue, setTaskInputValue] = useState('');
	const [statusInput, setStatusInput] = useState(false);

	// takes id parameter
	const { id: taskID } = useParams();

	const saveTask = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks`;
			setMessage(() => 'Loading...');
			const res = await axios({
				method: 'post',
				url: url,
				data: { task: taskInputValue, completed: statusInput },
			});

			if (res.status === 201) {
				setMessage(() => 'Saved');
			} else {
				setMessage(() => 'Save failed');
			}
			setTimeout(() => setMessage(() => 'Save'), 2000);
		} catch (e) {
			console.log(e);
		}
	};

	const taskPatcher = async () => {
		try {
			const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
			setMessage(() => 'Loading...');
			const res = await axios({
				method: 'patch',
				url: url,
				data: { task: taskInputValue, completed: statusInput },
			});

			if (res.status === 202) {
				setMessage(() => 'Updated');
			} else {
				setMessage(() => 'Update failed');
			}
			setTimeout(() => setMessage(() => 'Update'), 2000);
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
			// setStatusInput(() => data.data.completed);
			console.log(data.data.task);
			setTaskInputValue(() => data.data.task);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		if (taskID !== ':id') {
			setMessage(() => 'Update');
			getTask();
		}
	}, []);

	// saves the task
	const taskHandler = () => {
		if (taskID === ':id') {
			return saveTask();
		} else {
			taskPatcher();
		}
		// window.location.assign('/');
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
