import { Route, Routes } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Contacts from '../pages/Contacts';
import ContactsForm from '../pages/ContactsForm';
import ContactPreviewer from '../pages/ContactPreviewer';
import TaskPreviewer from '../pages/TaskPreviewer';
import TaskForm from '../pages/TaskForm';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Settings from '../pages/Settings';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/login' element={<SignIn />} />
			<Route path='/register' element={<SignUp />} />
			<Route
				path='/'
				element={
					<ProtectedRoutes>
						<Tasks />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/taskpreviewer/:id'
				element={
					<ProtectedRoutes>
						<TaskPreviewer />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/add/:id'
				element={
					<ProtectedRoutes>
						<TaskForm />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/contacts'
				element={
					<ProtectedRoutes>
						<Contacts />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/contacts/add/:id'
				element={
					<ProtectedRoutes>
						<ContactsForm />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/contacts/previewer/:id'
				element={
					<ProtectedRoutes>
						<ContactPreviewer />
					</ProtectedRoutes>
				}
			/>
			<Route
				path='/settings'
				element={
					<ProtectedRoutes>
						<Settings />
					</ProtectedRoutes>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
