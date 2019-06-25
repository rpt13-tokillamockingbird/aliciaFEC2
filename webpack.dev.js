const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: DIST_DIR,
		filename: '[name].bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './client/src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-react', '@babel/preset-env' ],
						plugins: [ '@babel/plugin-proposal-class-properties', 'transform-export-extensions' ]
					}
				}
			},
			{
				test: /\.css$/,
				loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			}
		]
	}
});
