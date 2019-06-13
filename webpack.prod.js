const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: DIST_DIR,
		filename: '[name].[contentHash].bundle.js'
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './client/src/template.html',
        minify:{
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })]
  },
	plugins: [ new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }), new CleanWebpackPlugin() ],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
			}
		]
	}
});
