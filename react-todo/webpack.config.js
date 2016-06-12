var path = require('path');
module.exports = {
	entry : "./src/entry.js",
	output : {
		path : path.join(__dirname, "dist"),
		publicPath : "./dist/",
		filename : "app.js"
	},
	externals : {
		'react' : "React"
	},
	module: {
		loaders : [
			{
				test: /\.js$/,
				loader: "jsx",
				include: /src/
			},
			{ 
				test: /\.css$/, 
				loader: "style!css" 
			},
			{ 
				test: /\.less$/, 
				loader: "style!css!less" 
			},
			{ 
				test: /\.(jpg|png)$/, 
				loader: "url?limit=8192" 
			}
		]
	}
}