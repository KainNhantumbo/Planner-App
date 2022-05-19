import React, { useState } from 'react';
import {
	BiEnvelope,
	BiLock,
	BiLockAlt,
	BiPaperPlane,
	BiUser,
	BiUserCheck,
} from 'react-icons/bi';
import { Container } from '../styles/components/signUp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
	const [errorMessage, setErrorMessage] = useState('');

	// navigation
	const navigate = useNavigate();

	// object to store form data
	const [formData, setFormData] = useState({
		name: '',
		surname: '',
		password: '',
		confirm_password: '',
		email: '',
	});

	// populates formData
	const formDataPicker = (e) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.name]: e.target.value,
		}));
	};

	// handles form data
	const server = `http://localhost:4500/api/v1`;
	const formDataHandler = (e) => {
		e.preventDefault();
		if (formData.password.length < 6) {
			setErrorMessage('Password must have at least 6 characters.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
			return;
		}
		// checks if the password and password_confirm are equal
		if (formData.password !== formData.confirm_password) {
			setErrorMessage('Paswords must match.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
			return;
		}
		// sends a post request to the server to register user
		// and get the token
		axios({
			method: 'post',
			data: formData,
			url: `${server}/auth/register`,
		})
			.then((response) => {
				// saves the token to localstorage
				localStorage.setItem('token', JSON.stringify(response.data.token));
				// navigates to app root
				navigate('/');
			})
			.catch((err) => console.log(err))
			.finally(() => {
				// if error, sets a error message to user
				setErrorMessage('There was an error, please try again.');
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
					Planner App
				</span>
				<p>A simple app that you can trust to keep track of your daily sets.</p>
			</header>
			<article>
				<h3>
					<strong>Signup in Planner</strong>
				</h3>

				<form onSubmit={formDataHandler}>
					<label htmlFor='name'>
						<BiUser />
						<span>Name</span>
					</label>
					<input
						type='text'
						name='name'
						id='name'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='surname'>
						<BiUserCheck />
						<span>Surname</span>
					</label>
					<input
						type='text'
						name='surname'
						id='surname'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='email'>
						<BiEnvelope />
						<span>E-mail</span>
					</label>
					<input
						type='email'
						name='email'
						id='email'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='password'>
						<BiLockAlt />
						<span>Password</span>
					</label>
					<input
						type='password'
						name='password'
						id='password'
						required
						onChange={formDataPicker}
					/>
					<label htmlFor='confirm-password'>
						<BiLock />
						<span>Confirm password</span>
					</label>
					<input
						type='password'
						name='confirm_password'
						required
						id='confirm-password'
						onChange={formDataPicker}
					/>

					<span className='errorMessage'>{errorMessage}</span>

					<button type='submit'>Get started!</button>
					<Link to={'/login'}>I already have account</Link>
				</form>
			</article>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
