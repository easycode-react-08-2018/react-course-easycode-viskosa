const webpack = require('webpack');
const path = require('path');

/*JSX -> Babel -> React*/

module.exports = {
	entry: path.resolve('./src/main.js'),
	output: {
		filename: 'bundle.js',
		publicPath: '/'
	},

	mode: 'development',
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader'				
			},

		]
	}
}