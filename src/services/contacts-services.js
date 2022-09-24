import fetchClient from '../api/fetch';

// fetch all contacts request
export const fechdata = async (setData) => {
	try {
		const { data } = await fetchClient({
			method: 'get',
			url: '/contacts',
		});
		if (setData instanceof Function === true) return setData(() => data.data);
	} catch (err) {
		console.log(err);
	}
};

// fetch a single contact from server api
export const fetchContact = async (urlID, setData) => {
	try {
		if (urlID === ':id') return;
		const { data } = await fetchClient({
			method: 'get',
			url: `/contacts/${urlID}`,
		});
		if (setData instanceof Function === true) return setData(data.data);
	} catch (err) {
		console.log(err);
	}
};

export const patchData = async (urlID, updatedObj) => {
	try {
		await fetchClient({
			method: 'patch',
			url: `/contacts/${urlID}`,
			data: updatedObj,
		});
	} catch (err) {
		console.log(err.response.data.errors.message);
	}
};

// sends a post request to server api
export const postData = async (newContact) => {
	try {
		await fetchClient({
			method: 'post',
			url: '/contacts',
			data: newContact,
		});
	} catch (err) {
		console.log(err);
	}
};

// sends a contact delete request
export const deleteContact = async (contactId, navigate) => {
	try {
		if (navigate instanceof Function === false)
			throw new Error('The second argument must be a navigation function');
		await fetchClient({
			method: 'delete',
			url: `/contacts/${contactId}`,
		});
		navigate('/contacts');
	} catch (err) {
		console.log(err);
	}
};

// makes a search contacts request
export const searchContacts = (e, setContacts) => {
	const query = e.target.value;
	if (setContacts instanceof Function === false)
		throw new Error('The second argument must be a updateState function');

	fetchClient({
		method: 'get',
		url: `/contacts?search=${query}`,
	})
		.then((response) => {
			// updates the state with received data
			setContacts(response.data.data);
		})
		.catch((err) => console.log(err));
};
