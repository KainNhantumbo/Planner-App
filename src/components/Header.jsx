import React from 'react';
import { HeaderContainer } from '../styles/heder';

const Header = ({ logStatus, logo, appName }) => {
	const headerData = [
		{
			id: 0,
			logo: '',
			description: 'Contacts',
			link: '',
		},
		{
			id: 1,
			logo: '',
			description: 'Notes',
			link: '',
		},
		{
			id: 2,
			logo: '',
			description: 'Reminders',
			link: '',
		},
		{
			id: 3,
			logo: '',
			description: 'Preferences',
			link: 'asdasd/asda',
		},
	];

	return (
		<HeaderContainer>
			<div className='logoSection'>
				{logo}
				<span>{appName}</span>
			</div>
			<nav className='navbar'>
				<ul>
					{headerData.map(({ logo, descripton, link, id }) => {
						return (
							<li key={id}>
								{logo}
								<a href={link}>{descripton}</a>
							</li>
						)
					})}
					<li>{logStatus}</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};
export default Header;
