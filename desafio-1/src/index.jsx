import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App2';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

function main() {
	ReactDOM
		.createRoot(document.getElementById('root'))
		.render(
			<React.StrictMode>
				<ToastContainer />
				<App />
			</React.StrictMode>
		);
}

main();