import React, { useState } from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signUp';

const SignUp = () => {
	const [passwordError, setPasswordError] = useState('');

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
				<p>A simple app that you can keep track of your daily sets.</p>
			</header>
			<main>
				<h4>Signup in Planner</h4>

				<form onSubmit={formDataHandler}>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='surname'>Surname</label>
					<input
						type='text'
						name='surname'
						id='surname'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='email'>E-mail</label>
					<input
						type='email'
						name='email'
						id='email'
						required
						onChange={formDataPicker}
					/>

					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						required
						onChange={formDataPicker}
					/>
					<label htmlFor='confirm-password'>Confirm password</label>
					<input
						type='password'
						name='confirm_password'
						required
						id='confirm-password'
						onChange={formDataPicker}
					/>

					<span className='errorMessage'>{passwordError}</span>
					<button type='submit'>Get started!</button>
					<button>I already have account</button>
				</form>
			</main>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
