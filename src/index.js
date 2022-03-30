import React from 'react';
import ReactDOM, { createPortal } from 'react-dom/client';
import './sass/main.css';
import App from './App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>	
);
