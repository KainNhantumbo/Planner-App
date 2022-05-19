import axios from 'axios';
// server url
const server = `http://localhost:4500/api/v1`;

// fetch all contacts request
export const fechdata = async (setData) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/contacts`;
		const { data } = await axios({
			method: 'get',
			url: url,
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (setData instanceof Function) return setData(() => data.data);
	} catch (err) {
		console.log(err);
	}
};

// fetch a single contact from server api
export const fetchContact = async (urlID, setData) => {
	try {
		if (urlID === ':id') return;
		const accessToken = JSON.parse(localStorage.getItem('token'));
		console.log(accessToken);
		const url = `${server}/contacts/${urlID}`;
		const { data } = await axios({
			method: 'get',
			url: url,
			headers: { authorization: `Bearer ${accessToken}` },
		});
		if (setData instanceof Function) return setData(data);
	} catch (err) {
		console.log(err);
	}
};

// sends a patch request to server api
export const patchData = async (urlID, updatedObj) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const patch_url = `${server}/contacts/${urlID}`;
		await axios({
			method: 'patch',
			url: patch_url,
			data: updatedObj,
			headers: { authorization: `Bearer ${accessToken}` },
		});
	} catch (err) {
		console.log(err);
	}
};

// sends a post request to server api
export const postData = async (newContact) => {
	try {
		const accessToken = JSON.parse(localStorage.getItem('token'));
		const url = `${server}/contacts`;
		await axios({
			method: 'post',
			url: url,
			data: newContact,
			headers: { authorization: `Bearer ${accessToken}` },
		});
	} catch (err) {
		console.log(err);
	}
};
