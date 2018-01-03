 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 module.exports = merge(common, {
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'public','dist'),
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: path.resolve(__dirname, 'public'),
     historyApiFallback:true
   }
 });
