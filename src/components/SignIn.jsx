import React, { useState } from 'react';
import { BiPaperPlane, BiSkipNextCircle } from 'react-icons/bi';
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
				<p>Hi, you are welcome to NavaPlanner!</p>
				<p>Let us help you with daily tasks</p>
        
				<button>
					<BiSkipNextCircle /> Skip
				</button>
			</header>
			<main>
				<span>Get started</span>
				<section>
					<form>
						<label htmlFor='email'>E-mail</label>
						<input type='email' name='email' id='email' />
						<span>{emailError}</span>
						<label htmlFor='password'>Password</label>
						<input type='password' name='password' id='password' />
						<span>{passwordError}</span>
						<button type='submit'>Sign In</button>
					</form>
				</section>
				<div>
					<button>Create a new account</button>
					<button>Forgot the password?</button>
				</div>
			</main>
			<footer>&copy: 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignIn;