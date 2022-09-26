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
import { Link } from 'react-router-dom';
import { GlobalStyles } from './styles/globalstyles';
import { ThemeProvider } from 'styled-components';
import { HeaderContainer } from './styles/header';
import { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from './styles/themes';

export default function App() {
	// menu toggler
	const [menuStatus, setMenuStatus] = useState('none');
	const menuShow = () => {
		if (menuStatus === 'none') return setMenuStatus(() => 'block');
		return setMenuStatus(() => 'none');
	};

	const logoutUser = () => {
		localStorage.removeItem('token');
		menuShow();
	};

	const [iconMode, setIconMode] = useState({ icon: <BiSun />, name: 'sun' });
	const [colors, setColors] = useState(lightTheme);

	// switches between dark and light themes
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

	useEffect(() => {
		setColors(() => {
			const themeData = JSON.parse(
				localStorage.getItem('theme') || `{"theme":"sun"}`
			);
			if (themeData === 'sun') return lightTheme;
			return darkTheme;
		});
	}, []);

	return (
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
	);
}
