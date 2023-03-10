// const path = require('path');

module.exports = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/preset-create-react-app',
		// 'storybook-addon-jsx', // Doesn't work
		// '@storybook/preset-scss',
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
	features: {
		previewMdx2: true,
	},
	framework: '@storybook/react',
	// staticDirs: [{ from: '../public', to: '/public' }],
	stories: [
		'../src/**/*.stories.mdx',
		'../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	// webpackFinal: async (config, { configType }) => {
	// 	// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
	// 	// You can change the configuration based on that.
	// 	// 'PRODUCTION' is used when building the static version of storybook.

	// 	// Make whatever fine-grained changes you need
	// 	config.module.rules.push({
	// 		test: /\.s[ac]ss$/,
	// 		use: [
	// 			'style-loader',
	// 			'css-loader',
	// 			{
	// 				loader: 'sass-loader',
	// 				options: {
	// 					// Prefer `dart-sass`
	// 					// implementation: require('sass'),
	// 					// Prefer `node-sass`
	// 					implementation: require('node-sass'),
	// 				},
	// 			  }
	// 		],
	// 		include: path.resolve(__dirname, '../src/style'),
	// 	});

	// 	// Return the altered config
	// 	return config;
	// },
}
