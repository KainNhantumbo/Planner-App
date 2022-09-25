import './sass/main.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Router>
			<App />
		</Router>
	</StrictMode>
);
