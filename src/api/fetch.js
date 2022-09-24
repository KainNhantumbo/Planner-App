import apiClient from './axios';

/**
 * Makes connection to the server api
 * @param config object with connection method, url and data (optional)
 * @returns AxiosPromise<any>
 */
const fetchClient = (config) => {
	const accessToken = JSON.parse(
		localStorage.getItem('user_token') || `{"user_token":""}`
	);
  console.log(accessToken);
	const token = `Bearer ${accessToken}`;
	return apiClient({
		...config,
		headers: {
			authorization: token,
		},
	});
};

export default fetchClient;
