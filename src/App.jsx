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
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
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
			setMenuStatus(() => 'none');
			setColors(() => darkTheme);
			localStorage.setItem('theme', JSON.stringify('moon'));
		} else {
			setIconMode({ icon: <BiSun />, name: 'sun' });
			setMenuStatus(() => 'none');
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
							<Link to='' onClick={menuShow}>
								<li>
									<BiCog />
									<span>Settings</span>
								</li>
							</Link>
							<Link to='' onClick={menuShow}>
								<li>
									<BiLogOut />
									<span>LogOut</span>
								</li>
							</Link>
						</ul>
					</nav>
				</HeaderContainer>
				<SignUp/>
				<AppRoutes />
			</ThemeProvider>
		</>
	);
}

export default App;
