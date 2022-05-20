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
		const url = `${server}/contacts/${urlID}`;
		const { data } = await axios({
			method: 'get',
			url: url,
			headers: { authorization: `Bearer ${accessToken}` },
		});

		if (setData instanceof Function) return setData(data.data);
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

// sends a contact delete request
export const deleteContact = async (params, navigate) => {
	try {
		// verifies if navigate becomes from useNavigate()
		if (navigate instanceof Function === false)
			throw new Error('The second argument must be a navigation function');

		const accessToken = JSON.parse(localStorage.getItem('token'));
		const delete_url = `${server}/contacts/${params.id}`;
		await axios({
			method: 'delete',
			url: delete_url,
			headers: { authorization: `Bearer ${accessToken}` },
		});
		navigate('/contacts');
	} catch (err) {
		console.log(err);
	}
};

// searchs contacts
export const searchContacts = (e, setContactsDB) => {
	const content = e.target.value;
	// verifies if contactsDB is a state function
	if (setContactsDB instanceof Function === false)
		throw new Error('The second argument must be a updateState function');
	const accessToken = JSON.parse(localStorage.getItem('token'));
	// makes a search request to the server
	axios({
		method: 'get',
		url: `${server}/contacts?search=${content}`,
		headers: { authorization: `Bearer ${accessToken}` },
	})
		.then((response) => {
			// updates the state with received data
			setContactsDB(response.data.data);
		})
		.catch((err) => console.log(err));
};
