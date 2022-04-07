import { BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signUp';

const SignUp = () => {
	return (
		<Container>
			<header>
				<span>
					<BiPaperPlane />
					Planner App
				</span>
				<p>A simple app that you can keep track of your dayly sets.</p>
			</header>
			<main>
				<span>Signup in Planner</span>
				<section>
					<form>
						<div>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' id='name' />

							<label htmlFor='surname'>Surname</label>
							<input type='text' name='surname' id='surname' />
						</div>
						<label htmlFor='email'>E-mail</label>
						<input type='email' name='email' id='email' />
						<div>
							<label htmlFor='female'>Female</label>
							<input type='radio' name='gender' id='female' value={'female'} />
							<label htmlFor='male'>Male</label>
							<input type='radio' name='gender' id='male' value={'male'} />
							<label htmlFor='other'>Other</label>
							<input type='radio' name='gender' id='other' value={'other'} />
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input type='password' name='password' id='password' />
							<label htmlFor='confirm-password'>Confirm password</label>
							<input
								type='password'
								name='confirm_password'
								id='confirm-password'
							/>
						</div>
						<button type='submit'>Get started!</button>
						<button>I already have account</button>
					</form>
				</section>
			</main>
			<footer>&copy: 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
