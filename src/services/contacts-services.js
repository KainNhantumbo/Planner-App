import axios from 'axios';

// server url
const server = `http://localhost:4500/api/v1`;

// fech all contacts
export const fechdata = async (setData) => {
	try {
		const url = `${server}/contacts`;
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
		const url = `${server}/contacts/${urlID}`;
		const { data } = await axios.get(url);
		if (setData instanceof Function) return setData(data);
	} catch (err) {
		console.log(err);
	}
};

// sends a patch request to server api
export const patchData = async (urlID, updatedObj) => {
	try {
		const patch_url = `${server}/contacts/${urlID}`;
		await axios({ method: 'patch', url: patch_url, data: updatedObj });
	} catch (err) {
		console.log(err);
	}
};

// sends a post request to server api
export const postData = async (newContact) => {
	try {
		const url = `${server}/contacts`;
		await axios({ method: 'post', url: url, data: newContact });
	} catch (err) {
		console.log(err);
	}
};
