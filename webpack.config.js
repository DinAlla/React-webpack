const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	module: {
  		rules: [
	  		{ 
	  			test: /\.js$/, 
	  			exclude: /node_modules/, 
	  			use: [
	  				{
	  					loader: "babel-loader"
	  				} 
	  			]
	  		},
	  		{
	  			test: /\.jsx$/,
	  			exclude: /node_modules/,
	  			use:[
	  				{
	  					loader: "babel-loader"
	  				}
	  			]
	  		}

  		]
	},
	plugins: [new HtmlWebpackPlugin()]
};


