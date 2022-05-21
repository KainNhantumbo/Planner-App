import { SettingsContainer } from '../styles/settings';
import TitleBars from '../components/TitleBars';
import { BiCog } from 'react-icons/bi';
import React, { useState, useEffect } from 'react';


const Settings = () => {
const [userData, setUserData] = useState();
	return (
		<SettingsContainer>
			<TitleBars title={'Settings'} icon={<BiCog />} />
			<article className='page'>
				<section className='user-info'>
					<h3>User Account</h3>
					<div>
						<span>
							
						</span>

					</div>
				</section>
				<section className='about'>
					<h3>About</h3>
				</section>

			</article>
		</SettingsContainer>
	);
};

export default Settings;
