import { BiPaperPlane } from 'react-icons/bi';
import { Container } from '../styles/components/signUp';

const SignUp = () => {
	return (
		<Container>
			<header>
				<BiPaperPlane />
				<span>Planner App</span>
				<p>A simple app that you can keep track of your dayly sets.</p>
			</header>
			<main></main>
			<footer>&copy: 2022 Nava Planner</footer>
		</Container>
	);
};

export default SignUp;
