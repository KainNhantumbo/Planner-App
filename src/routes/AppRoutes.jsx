import { Route, Routes } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Contacts from '../pages/Contacts';
import ContactsForm from '../pages/ContactsForm';
import ContactPreviewer from '../pages/ContactPreviewer';
import TaskPreviewer from '../pages/TaskPreviewer';
import TaskForm from '../pages/TaskForm';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ProtectedRoutes from './ProtectedRoutes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/signup' element={<SignUp />} />
			<Route
				path='/tasks'
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
		</Routes>
	);
};

export default AppRoutes;
