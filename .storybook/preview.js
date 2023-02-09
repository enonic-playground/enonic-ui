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
}
