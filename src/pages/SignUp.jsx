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

const SignUp = () => {
	const [passwordError, setPasswordError] = useState('');

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
	const formDataHandler = (e) => {};

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

					<span className='errorMessage'>{passwordError}</span>

					<button type='submit'>Get started!</button>
					<Link to={'/login'}>I already have account</Link>
				</form>
			</article>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
