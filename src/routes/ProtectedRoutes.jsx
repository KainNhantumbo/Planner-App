import { Navigate } from 'react-router-dom';

// used to restrict access to app routes
const ProtectedRoutes = ({ children }) => {
	const user = JSON.parse(localStorage.getItem('user_token'));
	if (!user || user === undefined) return <Navigate to={'/login'} />;
	return children;
};

export default ProtectedRoutes;
