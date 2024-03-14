import fetchClient from '../api/fetch';

export const getUserInfo = (setData) => {
	if (setData instanceof Function === false)
		throw new Error('Argument must be a updateState function.');
	fetchClient({
		method: 'get',
		url: '/users',
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
	fetchClient({
		method: 'delete',
		url: '/users',
	})
		.then((response) => {
			if (response.status === 200) {
				localStorage.removeItem('user_token');
				navigate('/login');
			}
		})
		.catch((err) => console.log(err));
};
