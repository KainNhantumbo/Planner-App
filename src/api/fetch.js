import apiClient from './axios';

/**
 * Makes a connection to the server api
 * @param config AxiosRequestConfig<any> | undefined
 * @returns AxiosPromise<any>
 */
const fetchClient = (config) => {
	const accessToken = JSON.parse(
		localStorage.getItem('user_token') || `{"user_token":""}`
	);
	return apiClient({
		...config,
		headers: {
			authorization: `Bearer ${accessToken}`,
		},
	});
};

export default fetchClient;
