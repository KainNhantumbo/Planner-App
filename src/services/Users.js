import axios from 'axios';
// server url
const server = `http://localhost:4500/api/v1`;
const server_url = `${server}/users`;

// gets user info
export const getUserInfo = (setData) => {
	if (setData instanceof Function === false)
		throw new Error('Argument must be a updateState function.');
	const accessToken = JSON.parse(localStorage.getItem('token'));
	// makes a get request to server
	axios({
		method: 'get',
		url: server_url,
		headers: { authorization: `Bearer ${accessToken}` },
	})
		.then((response) => {
			setData(response.data);
		})
		.catch((err) => console.log(err));
};

// deletes the user account
export const deleteUser = (navigate) => {
	if (navigate instanceof Function === false)
		throw new Error('Argument must be a navigation function.');
	const accessToken = JSON.parse(localStorage.getItem('token'));
	axios({
		method: 'delete',
		url: server_url,
		headers: { authorization: `Bearer ${accessToken}` },
	})
		.then((response) => {
			if (response.status === 200) {
				localStorage.removeItem('token');
				navigate('/login');
			}
		})
		.catch((err) => console.log(err));
};
