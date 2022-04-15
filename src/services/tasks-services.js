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
export const deleteTask = async (e) => {
	try {
		e.stopPropagation();
		const url = `http://localhost:4500/api/v1/tasks/${e.target.parentNode.id}`;
		await axios({ method: 'delete', url: url });
		getTasks();
	} catch (e) {
		console.log(e);
	}
};

// sets completion status and makes a patch request
// to server api
export const setCompletion = async (e, status) => {
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

		getTasks();
	} catch (e) {
		console.log(e);
	}
};
