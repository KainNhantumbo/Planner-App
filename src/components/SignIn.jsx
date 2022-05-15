import React, { useState } from 'react';
import { BiEnvelope, BiLock, BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signIn';

const SignIn = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

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
				<form>
					<label htmlFor='email'>
						<BiEnvelope />
						<span>E-mail</span>
					</label>
					<input
						type='email'
						required
						name='email'
						id='email'
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
						placeholder='Type your password here...'
					/>
					<span className='errorMessage'>{errorMessage}</span>
					<button type='submit'>Sign In</button>
				</form>
				<div>
					<button>Create a new account</button>
				</div>
			</article>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignIn;
