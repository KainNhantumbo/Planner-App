import { GlobalStyles } from './styles/globalstyles';
import { MainContainer } from './styles/mainstyles';
import Header from './components/Header';

function App() {
	console.log('tweeks')
	return (
		<>
			<GlobalStyles />
			<Header appName={'Planner'} />
			<MainContainer></MainContainer>
		</>
	);
}

export default App;
