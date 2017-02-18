const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
  return {
    entry: {
      main: './src/index.js',
      vendor: ['react', 'react-dom', 'immutable']
    },
    output: {
      filename: '[chunkhash].[name].js',
      path: path.resolve('./dist/static')
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }]
    },
    devtool: "source-map",
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({template: '!!handlebars-loader!src/index.hbs', filename: './../index.html'}),
      new ExtractTextPlugin('styles-[contenthash].css')
    ]
  }
};