const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
 const path = require('path');
module.exports = merge(common, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public','dist'),
    publicPath:'/dist/'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap:true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production'),
    })

  ]
});
