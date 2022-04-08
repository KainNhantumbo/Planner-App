import React, { useState } from 'react';
import { BiPaperPlane, BiChevronRight } from 'react-icons/bi';
import { Container } from '../styles/components/signIn';

const SignIn = () => {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState();

	return (
		<Container>
			<header>
				<span>
					<BiPaperPlane />
					Planner
				</span>
				<p>Hi, you are welcome to Nava Planner!</p>
				<p>Let us help with your daily tasks.</p>

				<button>
					<span>
						<BiChevronRight /> Skip
					</span>
				</button>
			</header>
			<main>
				<span> Get started!</span>
				<form>
					<label htmlFor='email'>E-mail</label>
					<input type='email' name='email' id='email' />
					<span className='errorMessage'>{emailError}</span>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' id='password' />
					<span className='errorMessage'>{passwordError}</span>
					<button type='submit'>Sign In</button>
				</form>
				<div>
					<button>Create a new account</button>
					<button>Forgot the password?</button>
				</div>
			</main>
			<footer>&copy; 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignIn;
