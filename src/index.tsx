import * as React from 'react';
import * as ReactDOM from 'react-dom'; // React 17
// import Favicon from 'react-favicon';
// import ReactDOM from 'react-dom/client'; // React 18
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM; // React 17
//const root = ReactDOM.createRoot(document.getElementById('root')); // React 18
root.render(
	<React.StrictMode>
		{/* <Favicon url='http://oflisback.github.io/react-favicon/img/github.ico' /> */}
		<App />
	</React.StrictMode>,
	document.getElementById('root'), // React 17
	() => {
		document.title = 'Users - Enonic XP Admin';
		document.querySelector('html')?.classList.add('enonic')
		// document.querySelector('html')?.classList.add('html')
		document.body.classList.add('enonic');
		// document.body.classList.add('body');
	}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
