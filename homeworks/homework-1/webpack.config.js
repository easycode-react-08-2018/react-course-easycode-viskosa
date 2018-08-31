const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					compact: false
				}				
			},
			{
		        test: /\.(sa|sc|c)ss$/,
		        use: [
						MiniCssExtractPlugin.loader,
		        		'css-loader', // The css-loader interprets @import and url() like import/require() and will resolve them.
		        		//'postcss-loader', //Add vendor prefixes to CSS rules using values from Can I Use. 
		        		'sass-loader'
		        	],
		    },    
			{
		        test: /\.styl$/,// /\.(sa|sc|c)ss$/,
		        use: [
						MiniCssExtractPlugin.loader,
			        	'css-loader',//The css-loader interprets @import and url() like import/require() and will resolve them.
			        	//'postcss-loader',//Add vendor prefixes to CSS rules using values from Can I Use. 
			        	'stylus-loader'
		        	],
		    },
		    {
		        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, // for glyphicons
		        loader: 'url-loader',
		        options: {
		           limit: 8192,
		           name:'[name].[ext]',
		           outputPath:'assets' //the icons will be stored in dist/assets folder
		        }
		    }

		]
	},

	plugins: [
	    new MiniCssExtractPlugin({
	        filename: 'bundle.css',
    	}),
    ]
}