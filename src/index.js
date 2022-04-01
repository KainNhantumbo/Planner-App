import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './sass/main.css';
import App from './App';

const rootContainer = document.getElementById('root');
const root = ReactDOM.createRoot(rootContainer);

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>	
);
