import React, { useState } from 'react';
import { HeaderContainer } from '../styles/header';
import {
	BiPaperPlane,
	BiCategory,
	BiCog,
	BiPhone,
	BiAlarm,
	BiPencil,
} from 'react-icons/bi';

const Header = ({ logStatus, logo, appName }) => {
	const [menuStatus, setMenuStatus] = useState('none');

	const menuShow = () => {
		if (menuStatus === 'none') {
			return setMenuStatus(() => 'block');
		}
		return setMenuStatus(() => 'none');
	};

	return (
		<HeaderContainer>
			<div className='logoSection'>
				<BiPaperPlane className='logo' />
				<span>{appName}</span>
				<button onClick={menuShow}>
					<BiCategory />
				</button>
			</div>

			<nav className='navbar' style={{ display: menuStatus }}>
				<ul>
					<li>
						<BiPencil />
						<a href=''>Notes</a>
					</li>
					<li>
						<BiAlarm />
						<a href=''>Tasks</a>
					</li>
					<li>
						<BiPhone />
						<a href=''>Contacts</a>
					</li>
					<li>
						<BiAlarm />
						<a href=''>Reminders</a>
					</li>
					<li>
						<BiCog />
						<a href=''>Preferences</a>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};
export default Header;
