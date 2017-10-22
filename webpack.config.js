const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.jsx'),
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
	  		}
  		]
	},
};

//webpack  2й
