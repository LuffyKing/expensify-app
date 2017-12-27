const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  plugins: [
     new HtmlWebpackPlugin({
       template: 'index.html',
     }),
     new ExtractTextPlugin("styles.css")
   ],
  module:{
    rules: [{
      loader: 'babel-loader',
      test:/\.js$/,
      exclude:/node_modules/
    },{
      test:/\.s*css$/,
      use:ExtractTextPlugin.extract({
        use:[
          {
                loader: "css-loader", options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader", options: {
                    sourceMap: true
                }
}
        ]
      })
    }]


  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
