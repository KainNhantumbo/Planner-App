import axios from 'axios';

const BASE_URL = 'http://localhost:4500/api/v1';

const apiClient = axios.create({ baseURL: BASE_URL });

apiClient.defaults.headers.common['Accept'] = 'application/json';
apiClient.defaults.headers.common['Content-Type'] = 'application/json';
apiClient.interceptors.response.use(undefined, (err) => {
	if (err.response?.status == 403) {
		location.assign('/login');
	}
	return Promise.reject(err);
});

export default apiClient;
