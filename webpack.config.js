var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	devtool: 'eval-source-map',

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
	  			test: /\.js$/, 
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
	]
};


