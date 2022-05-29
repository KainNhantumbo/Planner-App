import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signIn';
import { Link, useNavigate } from 'react-router-dom';
import { authUser } from '../services/auth';

const SignIn = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [userData, setUserData] = useState({ email: '', password: '' });
	// navigation
	const navigate = useNavigate();

	// populates the userData object
	const populateUserData = (e) => {
		setUserData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<Container>
			<header>
				<span>
					<BiPaperPlane />
					Planner
				</span>
				<p>Hi, you are welcome to Nava Planner!</p>
				<p>Let us help with your daily tasks.</p>
			</header>
			<article>
				<h3> Get started!</h3>
				<form onSubmit={(e) => authUser(e, userData, navigate, setErrorMessage)}>
					<label htmlFor='email'>
						<BiEnvelope />
						<span>E-mail</span>
					</label>
					<input
						type='email'
						required
						name='email'
						id='email'
						onChange={populateUserData}
						placeholder='Type you email here...'
					/>
					<label htmlFor='password'>
						<BiLock />
						<span>Password</span>
					</label>
					<input
						type='password'
						required
						name='password'
						id='password'
						onChange={populateUserData}
						placeholder='Type your password here...'
					/>
					<span className='errorMessage'>{errorMessage}</span>
					<button type='submit'>Sign In</button>
				</form>
				<div>
					<Link to={'/register'}>
						<button>Create a new account</button>
					</Link>
				</div>
			</article>
			<footer>&copy; 2022 Nava Planner - All rights reserved.</footer>
		</Container>
	);
};

export default SignIn;
