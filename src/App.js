import React, { useEffect, useState } from 'react';
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
import ContactPreviewer from './pages/ContactPreviewer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Tasks from './pages/Tasks';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';

function App() {
	// menu bar states management
		const [menuStatus, setMenuStatus] = useState('none');

	// theme setup
		const [iconMode, setIconMode] = useState({ icon: <BiSun />, name: 'sun' });

		// picks theme configuration from localStorage
			const themeDataPicker = () => {
				let mode = JSON.parse(localStorage.getItem('theme'));
				if (!mode || mode === undefined) {
					mode = 'sun';
					localStorage.setItem('theme', JSON.stringify(mode));
				}
				return mode;
			};
			const themeData = themeDataPicker();

			const [colors, setColors] = useState(() => {
				if (themeData === 'sun') {
					return lightTheme;
				} else {
					return darkTheme;
				}
			});
		// switches between dark and light themes
		// and sets the configuration into localStorage
			const modeSwitcher = () => {
				if (colors === lightTheme) {
					setIconMode({ icon: <BiMoon />, name: 'moon' });
					setMenuStatus(() => 'none')
					setColors(() => darkTheme);
					localStorage.setItem('theme', JSON.stringify('moon'));
				} else {
					setIconMode({ icon: <BiSun />, name: 'sun' });
					setMenuStatus(() => 'none')
					localStorage.setItem('theme', JSON.stringify('sun'));
					setColors(() => lightTheme);
				}
			};
		// ===================================== //
	// menu toggler
		const menuShow = () => {
			if (menuStatus === 'none') {
				return setMenuStatus(() => 'block');
			}
			return setMenuStatus(() => 'none');
		};
	// ======================================== //

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
								<a href='/'>
									<BiSpreadsheet />
									<span>Tasks</span>
								</a>
							</li>
							<li>
								<a href='/contacts'>
									<BiPhone />
									<span>Contacts</span>
								</a>
							</li>
							<li>
								<a href=''>
									<BiAlarm />
									<span>Reminders</span>
								</a>
							</li>
							<li>
								<a href=''>
									<BiCog />
									<span>Preferences</span>
								</a>
							</li>
						</ul>
					</nav>
				</HeaderContainer>


				{/* routes */}
				<Routes>
					<Route path='/' element={<Tasks />} />
					<Route path='/contacts' element={<Contacts />} />
					<Route path='/contacts/add/:id' element={<ContactsForm />} />
					<Route
						path='/contacts/previewer/:id'
						element={<ContactPreviewer />}
					/>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
