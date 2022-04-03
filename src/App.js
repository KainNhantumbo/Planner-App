import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/globalstyles';
import {
	BiPaperPlane,
	BiCategory,
	BiCog,
	BiPhone,
	BiAlarm,
	BiEdit,
	BiSpreadsheet,
	BiSun,
	BiMoon,
} from 'react-icons/bi';
import { HeaderContainer } from './styles/header';
import Contacts from './pages/Contacts';
import ContactsForm from './pages/ContactsForm';
import ContactPreviewer from './pages/ContactPreviwer';
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { colors, darkcolors } from './styles/colors';

function App() {
	const [menuStatus, setMenuStatus] = useState('none');
	const [iconMode, setIconMode] = useState({ icon: <BiSun />, name: 'sun' });

	const menuShow = () => {
		if (menuStatus === 'none') {
			return setMenuStatus(() => 'block');
		}
		return setMenuStatus(() => 'none');
	};

	const modeSwitcher = () => {
		iconMode.name === 'sun'
			? setIconMode({ icon: <BiMoon />, name: 'moon' })
			: setIconMode({ icon: <BiSun />, name: 'sun' });
	};

	return (
		<>
			<ThemeProvider theme={colors}>
				<GlobalStyles />
				<HeaderContainer>
					<div className='logoSection'>
						<BiPaperPlane className='logo' />
						<span>Planner</span>
						<button onClick={modeSwitcher}>{iconMode.icon}</button>
						<button onClick={menuShow}>
							<BiCategory />
						</button>
					</div>
					<nav className='navbar' style={{ display: menuStatus }}>
						<ul>
							<li>
								<a href=''>
									<BiEdit />
									Notes
								</a>
							</li>
							<li>
								<a href=''>
									<BiSpreadsheet />
									Tasks
								</a>
							</li>
							<li>
								<a href='/contacts'>
									<BiPhone />
									Contacts
								</a>
							</li>
							<li>
								<a href=''>
									<BiAlarm />
									Reminders
								</a>
							</li>
							<li>
								<a href=''>
									<BiCog />
									Preferences
								</a>
							</li>
						</ul>
					</nav>
				</HeaderContainer>

				{/* routes */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/contacts/add' element={<ContactsForm />} />
					<Route path='/contacts/previewer' element={<ContactPreviewer />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
