var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var PurifycssWebpack = require('purifycss-webpack')
var glob = require('glob-all')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		// publicPath: './dist/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: {
						loader: 'style-loader',
						options: {
							singleton: true
						}
					},
					use: [
						{
							loader: 'css-loader',
						}
					]
				})
			},
			{
				test: /\.jpg$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src', 'img:data-src']
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin({
			filename: '[name]-[hash:5].min.css'
		}),
		new PurifycssWebpack({
			paths: glob.sync([
				path.join(__dirname, '*.html'),
				path.join(__dirname, 'src/*.js')
			])
			
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			minify: {
				collapseWhitespace: true
			}
		})
	]
}