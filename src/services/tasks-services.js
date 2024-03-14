import fetchClient from '../api/fetch';

// get all tasks from the server
export const getTasks = async (setData) => {
	try {
		const { data } = await fetchClient({
			method: 'get',
			url: '/tasks',
		});
		if (setData instanceof Function) return setData(() => data.data);
	} catch (e) {
		console.log(e);
	}
};

// deletes a selected task
export const deleteTask = async (e, reloadTasks, ...reloadParams) => {
	e.stopPropagation();
	try {
		await fetchClient({
			method: 'delete',
			url: `/tasks/${e.target.parentNode.id}`,
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
	e.stopPropagation();
	const taskID = e.target.parentNode.id;
	try {
		await fetchClient({
			method: 'patch',
			url: `/tasks/${taskID}`,
			data: { completed: !status },
		});

		if (reloadTasks instanceof Function) return reloadTasks(...params);
		throw new Error('The third argument must be function.');
	} catch (e) {
		console.log(e);
	}
};

export const saveTask = async (taskInputValue, statusInput, setMessage) => {
	let error = false;
	if (setMessage instanceof Function === false)
		throw new Error('The last argument must be function.');
	setMessage(() => 'Loading...');
	try {
		const response = await fetchClient({
			method: 'post',
			url: '/tasks',
			data: { task: taskInputValue, completed: statusInput },
		});

		if (response.status === 201) {
			setMessage(() => 'Saved');
			setTimeout(() => setMessage(() => 'Save'), 2000);
		}
	} catch (e) {
		console.log(e);
		error = true;
	} finally {
		if (error) {
			setMessage(() => 'Failed');
			setTimeout(() => setMessage(() => 'Save'), 3000);
		}
	}
};

export const getTask = async (setData, setStatus, taskID) => {
	try {
		const { data } = await fetchClient({
			method: 'get',
			url: `/tasks/${taskID}`,
		});
		if (setData instanceof Function && setStatus instanceof Function)
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
	if (setMessage instanceof Function === false)
		throw new Error('argument 1 is not a function');
	setMessage(() => 'Loading...');
	try {
		const response = await fetchClient({
			method: 'patch',
			url: `/tasks/${taskID}`,
			data: { task: taskInputValue, completed: statusInput },
		});
		if (response.status === 202) {
			setMessage(() => 'Updated');
			setTimeout(() => setMessage(() => 'Update'), 2000);
		}
	} catch (e) {
		console.log(e);
	}
};

// makes a search tasks request
export const searchTasks = (e, setTasksData) => {
	const query = e.target.value;
	if (setTasksData instanceof Function === false)
		throw new Error('The second argument must be a updateState function');
	fetchClient({
		method: 'get',
		url: `/tasks?search=${query}`,
	})
		.then((response) => {
			setTasksData(response.data.data);
		})
		.catch((err) => console.log(err));
};
