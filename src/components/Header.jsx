import React, { useState } from 'react';
import { HeaderContainer } from '../styles/header';
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

const Header = ({ logStatus, logo, appName }) => {
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
		<HeaderContainer>
			<div className='logoSection'>
				<BiPaperPlane className='logo' />
				<span>{appName}</span>
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
						<a href=''>
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
	);
};
export default Header;
