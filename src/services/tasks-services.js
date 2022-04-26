import axios from 'axios';

// get all tasks from the server api and
// applies a default sorting
export const getTasks = async (setData) => {
	try {
		const url = `http://localhost:4500/api/v1/tasks`;
		const { data } = await axios({ method: 'get', url: url });

		// sorts data by tasks
		data.data.sort((a, b) => {
			if (a.task > b.task) return true;
			return -1;
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
		const url = `http://localhost:4500/api/v1/tasks/${e.target.parentNode.id}`;
		await axios({ method: 'delete', url: url });
		if (reloadTasks instanceof Function) return reloadTasks(...reloadParams);
		throw new Error('The second parameter must be function.');
	} catch (e) {
		console.log(e);
	}
};

// sets completion status and makes a patch request
// to server api
export const setCompletion = async (e, status, reloadTasks, ...params) => {
	try {
		e.stopPropagation();
		let statusData;
		const taskID = e.target.parentNode.id;
		const url = `http://localhost:4500/api/v1/tasks/${taskID}`;

		if (status === true) {
			statusData = false;
		} else {
			statusData = true;
		}

		await axios({
			method: 'patch',
			url: url,
			data: { completed: statusData },
		});

		if (reloadTasks instanceof Function) return reloadTasks(...params);
		throw new Error('The third parameter must be function.');
	} catch (e) {
		console.log(e);
	}
};

export const saveTask = async (taskInputValue, statusInput, setMessage) => {
	let error = false;
	try {
		const url = `http://localhost:4500/api/v1/tasks`;
		if (!setMessage instanceof Function)
			throw new Error('The last parameter must be function.');
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
		const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
		const { data } = await axios({ url });
		if (setData instanceof Function)
			return [
				setData(() => data.data.task),
				setStatus(() => data.data.completed),
			];
		throw new Error('The first and second parameters must be functions.');
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
		const url = `http://localhost:4500/api/v1/tasks/${taskID}`;
		if (!setMessage instanceof Function)
			throw new Error('Parameter 1 is not a function');
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
	} catch (e) {
		console.log(e);
	}
};
