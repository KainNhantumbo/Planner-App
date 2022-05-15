import { Route, Routes } from 'react-router-dom';
import Tasks from '../pages/Tasks';
import Contacts from '../pages/Contacts';
import ContactsForm from '../pages/ContactsForm';
import ContactPreviewer from '../pages/ContactPreviewer';
import TaskPreviewer from '../pages/TaskPreviewer';
import TaskForm from '../pages/TaskForm';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Tasks />} />
			<Route path='/taskpreviewer/:id' element={<TaskPreviewer />} />
			<Route path='/add/:id' element={<TaskForm />} />
			<Route path='/contacts' element={<Contacts />} />
			<Route path='/contacts/add/:id' element={<ContactsForm />} />
			<Route path='/contacts/previewer/:id' element={<ContactPreviewer />} />
		</Routes>
	);
};

export default AppRoutes;
