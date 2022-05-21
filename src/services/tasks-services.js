import axios from 'axios';
const server = `http://localhost:4500/api/v1`;

// get all tasks from the server
export const getTasks = async (setData) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/tasks`;
		const { data } = await axios({
			method: 'get',
			url: url,
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (setData instanceof Function) return setData(() => data.data);
	} catch (e) {
		console.log(e);
	}
};

// deletes a selected task
export const deleteTask = async (e, reloadTasks, ...reloadParams) => {
	try {
		e.stopPropagation();
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/tasks/${e.target.parentNode.id}`;
		await axios({
			method: 'delete',
			url: url,
			headers: { authorization: `Bearer ${accessToken}` },
		});
		if (reloadTasks instanceof Function) return reloadTasks(...reloadParams);
		throw new Error('The second argument must be function.');
	} catch (e) {
		console.log(e);
	}
};

// sets task completion status and makes a patch request
// to server api
export const setCompletion = async (e, status, reloadTasks, ...params) => {
	try {
		e.stopPropagation();
		const accessToken = JSON.parse(localStorage.getItem('token'));
		let statusData;
		const taskID = e.target.parentNode.id;
		const url = `${server}/tasks/${taskID}`;

		if (status === true) {
			statusData = false;
		} else {
			statusData = true;
		}
		// sends a patch request to server
		await axios({
			method: 'patch',
			url: url,
			data: { completed: statusData },
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (reloadTasks instanceof Function) return reloadTasks(...params);
		throw new Error('The third argument must be function.');
	} catch (e) {
		console.log(e);
	}
};

export const saveTask = async (taskInputValue, statusInput, setMessage) => {
	let error = false;
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/tasks`;
		if (!setMessage instanceof Function)
			throw new Error('The last argument must be function.');
		setMessage(() => 'Loading...');
		const res = await axios({
			method: 'post',
			url: url,
			data: { task: taskInputValue, completed: statusInput },
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (res.status === 201) {
			setMessage(() => 'Saved');
		}
		setTimeout(() => setMessage(() => 'Save'), 2000);
	} catch (e) {
		console.log(e);
		error = true;
	} finally {
		if (error) {
			setMessage(() => 'Failed');
		}
		setTimeout(() => setMessage(() => 'Save'), 3000);
	}
};

// gets a single task by id, if present
export const getTask = async (setData, setStatus, taskID) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/tasks/${taskID}`;
		const { data } = await axios({
			url,
			headers: { authorization: `Bearer ${accessToken}` },
		});
		if (setData instanceof Function)
			return [
				setData(() => data.data.task),
				setStatus(() => data.data.completed),
			];
		throw new Error('The first and second arguments must be functions.');
	} catch (err) {
		console.log(err);
	}
};

export const taskPatcher = async (
	setMessage,
	taskInputValue,
	statusInput,
	taskID
) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/tasks/${taskID}`;
		// tests if setMessage is parameter is a function
		if (!setMessage instanceof Function)
			throw new Error('argument 1 is not a function');

		setMessage(() => 'Loading...');
		const res = await axios({
			method: 'patch',
			url: url,
			data: { task: taskInputValue, completed: statusInput },
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (res.status === 202) {
			setMessage(() => 'Updated');
		}
		setTimeout(() => setMessage(() => 'Update'), 2000);
	} catch (e) {
		console.log(e);
	}
};

// makes a search tasks request
export const searchTasks = (e, setTasksData) => {
	const content = e.target.value;
	// verifies if setTasksTasksData is a state function
	if (setTasksData instanceof Function === false)
		throw new Error('The second argument must be a updateState function');
	const accessToken = JSON.parse(localStorage.getItem('token'));
	// makes a search request to the server
	axios({
		method: 'get',
		url: `${server}/tasks?search=${content}`,
		headers: { authorization: `Bearer ${accessToken}` },
	})
		.then((response) => {
			// updates the state with received data
			setTasksData(response.data.data);
		})
		.catch((err) => console.log(err));
};
