var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'eval-source-map',

	//htmlplagin - указать на основе какого файла делать штуки
	//удалить папку Public из гитхаба

	//todo app, без севера. чистый реакт
	//chekpoint
  	entry:  __dirname + "/src/index.js",
  	output: {
    	path: __dirname + "/public",
    	filename: "bundle.js"
  	},

	module: {
  		rules: [
	  		{ 
	  			test: /\.jsx$/, 
	  			exclude: /node_modules/, 
	  			loader :'babel-loader'
	  		},
	  		{
        		test: /\.css$/,
        		use: ExtractTextPlugin.extract({
        			fallback: "style-loader",
          			use: "css-loader"
      			})
      		}
  		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new ExtractTextPlugin('[name].css')
	],
	watch: true
};


