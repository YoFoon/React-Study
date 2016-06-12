var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [ 
  'react/dist/react.min.js'
];

var config = {
    entry: './app/main.js',

    output: {
        path: path.join(__dirname, 'build'),
        publicPath: "./build",
        filename: 'App.js'
    },

    resolve: {
        alias: {}
    },

    module: {
        noParse: [],
        loaders: [
            { 
                test: /\.jsx?$/,loader: 'babel-loader', include: /app/
            },
            { 
                test: /\.jsx?$/,
                //loader: 'jsx',
                loader: 'babel-loader',
                include: /app/,
                query: {
                  presets:['react','es2015']
                }
            }
        ]
    }
}

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;