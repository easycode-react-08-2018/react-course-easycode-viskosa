const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
				loader: 'babel-loader',
				query: {
					compact: false
				}				
			},
			{
		        test: /\.styl$/,
		        use: ExtractTextPlugin.extract({
		            use: [
		              { 
		                loader: "css-loader",
		                options: { 
		                  minimize: true
		                }
		              },
		              {
		                loader: 'postcss-loader',
		                options: {
		                    plugins: [
		                        autoprefixer({
		                            browsers:['ie >= 8', 'last 4 version']
		                        })
		                    ],
		                    sourceMap: false
		                }
		              },
		              'stylus-loader'
		            ]
		        })
		    },

		]
	},

	plugins: [
	    new ExtractTextPlugin({
	        filename: 'bundle.css',
	        allChunks: true
    	}),
    ]
}