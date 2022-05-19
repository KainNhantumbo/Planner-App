import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signIn';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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

	// logs the user to application
	const server = `http://localhost:4500/api/v1`;
	const authUser = (e) => {
		e.preventDefault();
		// verifies the password length
		if (userData.password.length < 6) {
			setErrorMessage('Password must have at least 6 characters.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
			return;
		}

		axios({
			method: 'post',
			data: userData,
			url: `${server}/auth/login`,
		})
			.then((response) => {
				localStorage.setItem('token', JSON.stringify(response.data.token));
				navigate('/');
			})
			.catch((err) => console.log(err))
			.finally(() => {
				setErrorMessage('Password or e-mail is incorrect.');
				setTimeout(() => {
					setErrorMessage('');
				}, 3000);
			});
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
				<form onSubmit={authUser}>
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
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignIn;
