const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = merge(common, {
	entry: {
		main: `${SRC_DIR}/index.jsx`
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: 'babel-loader' }
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
});
