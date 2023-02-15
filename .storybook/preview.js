import '../src/style/index.sass';

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

export const decorators = [
	(Story, whatever) => {
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
	}
];
