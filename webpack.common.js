const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV==='test'){
  require('dotenv').config({ path:'.env.test'});
}else if (process.env.NODE_ENV==='development'){
  require('dotenv').config({ path:'.env.development'});
}
module.exports = {
  entry: [ 'babel-polyfill','./src/app.js'
  ],
  plugins: [
     new HtmlWebpackPlugin({
       template: 'index.html',
     }),
     new CleanWebpackPlugin(['dist']),
     new ExtractTextPlugin("styles.css"),
     new webpack.DefinePlugin({
       'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
       'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
       'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
       'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
       'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
       'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
     })

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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public','dist'),
    publicPath:'/dist/'
  }
};
