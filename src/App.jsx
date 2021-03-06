import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalStyles } from './styles/globalstyles';
import {
	BiPaperPlane,
	BiCategory,
	BiCog,
	BiPhone,
	BiSpreadsheet,
	BiSun,
	BiMoon,
	BiLogOut,
} from 'react-icons/bi';
import AppRoutes from './routes/AppRoutes';
import { HeaderContainer } from './styles/header';
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
			setColors(() => darkTheme);
			localStorage.setItem('theme', JSON.stringify('moon'));
		} else {
			setIconMode({ icon: <BiSun />, name: 'sun' });
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
	// log out user
	const logoutUser = () => {
		// removes the token on localstorage
		localStorage.removeItem('token');
		menuShow();
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
					<nav
						className='navbar'
						style={{ display: menuStatus }}
						onClick={(e) => {
							if (e.target.tagName === 'NAV') {
								menuShow();
							}
						}}
					>
						<ul>
							<Link to='/' onClick={menuShow}>
								<li>
									<BiSpreadsheet />
									<span>Tasks</span>
								</li>
							</Link>
							<Link to='/contacts' onClick={menuShow}>
								<li>
									<BiPhone />
									<span>Contacts</span>
								</li>
							</Link>
							<Link to='/settings' onClick={menuShow}>
								<li>
									<BiCog />
									<span>Settings</span>
								</li>
							</Link>
							<Link to='login' onClick={logoutUser}>
								<li>
									<BiLogOut />
									<span>LogOut</span>
								</li>
							</Link>
						</ul>
					</nav>
				</HeaderContainer>
				<AppRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
