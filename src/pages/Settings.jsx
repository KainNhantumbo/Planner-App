import { SettingsContainer } from '../styles/settings';
import TitleBars from '../components/TitleBars';
import {
	BiArrowBack,
	BiBookBookmark,
	BiCog,
	BiEnvelope,
	BiIdCard,
	BiInfoCircle,
	BiPaperPlane,
	BiTask,
	BiTrash,
	BiTrashAlt,
	BiUser,
	BiUserCircle,
} from 'react-icons/bi';
import {
	BsListTask,
	FaCode,
	FaCopyright,
	FaGithub,
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
							<BiTrash />
							<span>Do you really want to delete your account?</span>
						</h3>
						<div className='actions'>
							<button
								onClick={(e) => {
									setModalState(false);
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
							<h3>
								<BiIdCard />
								<span>Name:</span>
							</h3>
							<span className='data'>
								{userData.user?.map((user) => user.name + ' ' + user.surname)}
							</span>
						</div>
						<div className='info'>
							<h3>
								<BiEnvelope />
								<span>E-mail:</span>
							</h3>
							<span className='data'>
								{userData.user?.map((user) => user.email)}
							</span>
						</div>
						<div className='info'>
							<h3>
								<BiTask />
								<span>Tasks saved:</span>
							</h3>
							<span className='data'>{userData.tasks_saved}</span>
						</div>
						<div className='info'>
							<h3>
								<BiBookBookmark />
								<span>Contacts saved:</span>
							</h3>
							<span className='data'>{userData.contacts_saved}</span>
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
						<div className='info'>
							<h3>
								<BiPaperPlane />
								Planner App V0.0.9 (beta)
							</h3>
						</div>
						<div className='info'>
							<h3>
								<FaCode />
								<span>Developer: Kain Nhantumbo</span>
							</h3>
						</div>
						<div className='info'>
							<h3>
								<FaGithub />
								<span>
									Github: {' '}
									<a
										href='https://github.com/KainNhantumbo'
										rel='noreferrer'
										target={'_blank'}
									>
										github.com/KainNhantumbo
									</a>
								</span>
							</h3>
						</div>
						<div className='info'>
							<h3>
								<FaCopyright />
								<span>Copyright &copy; 2022 Kain Nhantumbo</span>
							</h3>
						</div>
						<div className='info'>
							<h3>
								<GiMite />
								<span>Licensed under MIT</span>
							</h3>
						</div>
					</section>
				</section>
			</article>
		</SettingsContainer>
	);
};

export default Settings;
