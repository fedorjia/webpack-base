const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const base = require('./webpack.base.js');

module.exports = merge(base, {
	mode: 'development',

	entry: {
		main: './src/index.js',
		vendor: [
			'lodash'
		]
	},

	devtool: 'inline-source-map',

	devServer: {
		contentBase: './dist',
		hot: true
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader',
					}, {
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					}, {
						loader: 'postcss-loader'
					}
				]
			}
		]
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']),

		new HtmlWebpackPlugin({
			title: 'Dev Title',
			template: './src/index.html'
		}),

		new webpack.optimize.RuntimeChunkPlugin({
			name: 'vendor'
		}),
		new webpack.NamedModulesPlugin(),

		new webpack.HotModuleReplacementPlugin()
	],

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
});
