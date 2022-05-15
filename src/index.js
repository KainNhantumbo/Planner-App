import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/main.css';
import App from './App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
