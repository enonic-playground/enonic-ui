import '../src/style/index.sass';
const { addDecorator } = require('@storybook/react');
// const { jsxDecorator } = require('storybook-addon-jsx'); // Doesn't work

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: 'light',
		values: [
			{
				name: 'light',
				value: '#fff',
			}, {
				name: 'dark',
				value: '#212121',
			},
		],
	},
	// controls: {
	// 	matchers: {
	// 		color: /(background|color)$/i,
	// 		date: /Date$/,
	// 	},
	// },
	options: {
		storySort: {
			method: 'alphabetical',
			locales: 'en-US',
		}
	}
}


addDecorator((Story, whatever) => {
	// console.debug('whatever', whatever);
	const {
		globals: {
			backgrounds: {
				value: backgroundColor
			} = {}
		} = {}
	} = whatever;
	return backgroundColor === '#212121'
	? (
		<div className='dark-theme'>
			<Story />
		</div>
	) : (
		<Story />
	);
})
