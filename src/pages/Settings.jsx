import { SettingsContainer } from '../styles/settings';
import TitleBars from '../components/TitleBars';
import {
	BiArrowBack,
	BiCog,
	BiInfoCircle,
	BiPaperPlane,
	BiTagAlt,
	BiTrash,
	BiTrashAlt,
	BiUser,
} from 'react-icons/bi';
import {
	FaCode,
	FaCopyright,
	FaGithub,
	FaTrash,
	GiMite,
} from 'react-icons/all';
import { useState, useEffect } from 'react';
import { deleteUser, getUserInfo } from '../services/Users';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
	// navigation function
	const navigate = useNavigate();
	// stores user information
	const [userData, setUserData] = useState([]);
	// stores modal states
	const [modalState, setModalState] = useState(false);

	useEffect(() => {
		getUserInfo(setUserData);
	}, []);
	return (
		<SettingsContainer>
			<TitleBars title={'Settings'} icon={<BiCog />} />
			{/* modal */}
			{modalState ? (
				<section className='modal-container'>
					<div className='advice'>
						<h3>
							<BiTrash />{' '}
							<span>Do you really want to delete your account?</span>
						</h3>
						<div className='actions'>
							<button
								onClick={(e) => {
									setModalState(false);
									// deletes a user
									deleteUser(navigate);
								}}
							>
								<span>
									<BiTrashAlt />
									Yes, delete.
								</span>
							</button>
							<button onClick={(e) => setModalState(false)}>
								<span>
									<BiArrowBack />
									No, cancel.
								</span>
							</button>
						</div>
					</div>
				</section>
			) : null}
			{/* page content */}
			<article className='page'>
				<section className='user-info'>
					<h3>
						<BiUser /> <span>User Account</span>
					</h3>
					<section>
						<div className='info'>
							<span>Name:</span>
							<span>
								{userData.user?.map((user) => user.name + ' ' + user.surname)}
							</span>
						</div>
						<div className='info'>
							<span>E-mail:</span>
							<span>{userData.user?.map((user) => user.email)}</span>
						</div>
						<div className='info'>
							<span>Tasks saved:</span>
							<span>{userData.tasks_saved}</span>
						</div>
						<div className='info'>
							<span>Contacts saved:</span>
							<span>{userData.contacts_saved}</span>
						</div>
						<div>
							<button onClick={(e) => setModalState(true)}>
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
