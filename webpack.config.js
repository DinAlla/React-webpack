var HtmlWebpackPlugin = require('html-webpack-plugin');
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
	  			test: /\.js$/, 
	  			exclude: /node_modules/, 
	  			loader :'babel-loader'
	  		},
	  		{
	            test   :/\.jsx?$/,
	            exclude:/node_modules/,
	            loader :'babel-loader'
	        }
  		]
	},
	
	devServer: {
    	contentBase: "./public",
    	colors: true,
    	historyApiFallback: true,
    	inline: true
  	},
	plugins: [new HtmlWebpackPlugin()]
};


