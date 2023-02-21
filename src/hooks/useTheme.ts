import {useWhenInitAsync} from '@seamusleahy/init-hooks';
import * as React from 'react';


export default function useTheme() {
	// TODO support follow system
	const [theme, setTheme] = React.useState<'light-theme'|'dark-theme'>('light-theme');
	const toggleTheme = React.useCallback(() => {
		if (theme === 'light-theme') {
			// document.body.classList.add('dark-theme');
			setTheme('dark-theme');
		} else {
			// document.body.classList.remove('dark-theme');
			setTheme('light-theme');
		}
	}, [
		theme, setTheme
	]);

	useWhenInitAsync(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark-theme');
		}

		// window.matchMedia('(prefers-color-scheme: dark)')
		// 	.addEventListener('change', event => {
		// 		const colorScheme = event.matches ? "dark" : "light";
		// 		console.log(colorScheme); // "dark" or "light"
		// 		setTheme(`${colorScheme}-theme`);
		// 	});
	});

	React.useEffect(() => {
		if (theme === 'light-theme') {
			document.body.classList.remove('dark-theme');
		} else {
			document.body.classList.add('dark-theme');
		}
	},[
		theme
	]);

	return {theme, toggleTheme};
}
