const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(base, {
	mode: 'production',

	entry: {
		main: './src/index.js',
		vendor: [
			'lodash'
		]
	},

	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
			// , {
			// 	test: /\.js$/,
			// 	exclude: /(node_modules|bower_components)/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env'],
			// 			plugins: [require('@babel/plugin-proposal-object-rest-spread')]
			// 		}
			// 	}
			// }
		]
	},
	plugins: [

		new CleanWebpackPlugin(['dist']),

		new HtmlWebpackPlugin({
			title: 'Prod Title',
			template: './src/index.html'
		}),

		new webpack.HashedModuleIdsPlugin(),

		new webpack.optimize.RuntimeChunkPlugin({
			name: "manifest"
		}),

		new webpack.optimize.SplitChunksPlugin({
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
});
