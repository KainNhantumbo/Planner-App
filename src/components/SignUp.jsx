import React, { useState } from 'react';
import { BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signUp';

const SignUp = () => {
	const [password, setPassword] = useState('');
	const [confirmEmail, setConfirmEmail] = useState('');
	const [email, setEmail] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');

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

				<form>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name' />

					<label htmlFor='surname'>Surname</label>
					<input type='text' name='surname' id='surname' />

					<label htmlFor='email'>E-mail</label>
					<input type='email' name='email' id='email' />

					<label htmlFor='password'>Password</label>
					<input type='password' name='password' id='password' />
					<label htmlFor='confirm-password'>Confirm password</label>
					<input
						type='password'
						name='confirm_password'
						id='confirm-password'
					/>

					<span className='errorMessage'>rg{passwordError}</span>
					<button type='submit'>Get started!</button>
					<button>I already have account</button>
				</form>
			</main>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
