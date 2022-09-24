import apiClient from './axios';

/**
 * Makes connection to the server api
 * @param config object with connection method, url and data (optional)
 * @returns AxiosPromise<any>
 */
const fetchClient = (config) => {
	const acessToken = JSON.parse(
		localStorage.getItem('user_token') || `{"user_token":""}`
	);
	const token = `Bearer ${acessToken.user_token}`;
	return apiClient({
		...config,
		headers: {
			authorization: token,
		},
	});
};

export default fetchClient;
