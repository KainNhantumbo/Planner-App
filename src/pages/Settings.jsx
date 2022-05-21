import { SettingsContainer } from '../styles/settings';
import TitleBars from '../components/TitleBars';
import {
	BiCog,
	BiInfoCircle,
	BiPaperPlane,
	BiTrash,
	BiUser,
} from 'react-icons/bi';
import { FaCode, FaCopyright, FaGithub, GiMite } from 'react-icons/all';
import { useState, useEffect } from 'react';
import { deleteUser, getUserInfo } from '../services/Users';

const Settings = () => {
	const [userData, setUserData] = useState([]);
	const { user } = userData;

	const user_info = console.log(user);

	useEffect(() => {
		getUserInfo(setUserData);
	}, []);
	return (
		<SettingsContainer>
			<TitleBars title={'Settings'} icon={<BiCog />} />
			<article className='page'>
				<section className='user-info'>
					<h3>
						<BiUser /> <span>User Account</span>
					</h3>
					<section>
						<div className='info'>
							<span>Name:</span>
							<span>user</span>
						</div>
						<div className='info'>
							<span>E-mail:</span>
							<span>user</span>
						</div>
						<div className='info'>
							<span>Tasks saved:</span>
							<span>user</span>
						</div>
						<div className='info'>
							<span>Contacts saved:</span>
							<span>user</span>
						</div>
						<div>
							<button>
								<span>
									<BiTrash /> Delete account
								</span>
							</button>
						</div>
					</section>
				</section>
				<section className='about'>
					<h3>
						<BiInfoCircle /> <span>About</span>
					</h3>
					<section>
						<div>
							<span>
								<BiPaperPlane />
								<i>Planner App</i> V0.0.8 (beta)
							</span>
						</div>
						<div>
							<span>
								<FaCode />
								<i>Developer:</i> Kain Nhantumbo
							</span>
						</div>
						<div>
							<span>
								<FaGithub />
								<i>Github:</i>{' '}
								<a
									href='https://github.com/KainNhantumbo'
									rel='noreferrer'
									target={'_blank'}
								>
									github.com/KainNhantumbo
								</a>
							</span>
						</div>
						<div>
							<span>
								<FaCopyright />
								Copyright &copy; 2022 Kain Nhantumbo
							</span>
						</div>
						<div>
							<span>
								<GiMite /> Licensed under MIT
							</span>
						</div>
					</section>
				</section>
			</article>
		</SettingsContainer>
	);
};

export default Settings;
