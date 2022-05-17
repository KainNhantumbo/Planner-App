import { Navigate } from 'react-router-dom';

// used to restrict access to app routes
const ProtectedRoutes = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('token'));
	if (!user || user === undefined) {
		return <Navigate to={'/'} />;
	}
	return children;
};

export default ProtectedRoutes;
