module.exports = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app',
		// {
		// 	name: 'storybook-addon-sass-postcss',
		// 	options: {
		// 		loadSassAfterPostCSS: true,
		// 		// postcssLoaderOptions: {
		// 		// 	implementation: require('postcss'),
		// 		// },
		// 		rule: {
		// 			test: /\.(scss|sass)$/i,
		// 		},
		// 		sassLoaderOptions: {
		// 			implementation: require('sass'),
		// 		},
		// 	},
		// },
	],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	framework: '@storybook/react',
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
}
