import axios from 'axios';

export const fechdata = async (setData) => {
	try {
		const url = 'http://localhost:4500/api/v1/contacts';
		const { data } = await axios.get(url);

		if (setData instanceof Function) return setData(() => data);
	} catch (err) {
		console.log(err);
	}
};

// fetch contact a single contact from server api
export const fetchContact = async (urlID, setData) => {
	try {
		if (urlID === ':id') return;
		const url = `http://localhost:4500/api/v1/contacts/${urlID}`;
		const { data } = await axios.get(url);
		if (setData instanceof Function) return setData(data);
	} catch (err) {
		console.log(err);
	}
};

// sends a patch request to server api
export const patchData = async (urlID, updatedObj) => {
	try {
		const patch_url = `http://localhost:4500/api/v1/contacts/${urlID}`;
		await axios({ method: 'patch', url: patch_url, data: updatedObj });
	} catch (err) {
		console.log(err);
	}
};

// sends a post request to server api
export const postData = async (newContact) => {
	try {
		const url = 'http://localhost:4500/api/v1/contacts';
		await axios({ method: 'post', url: url, data: newContact });
	} catch (err) {
		console.log(err);
	}
};
