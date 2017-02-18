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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true
            }
          }
        ]
      }
    ]
    },
    devtool: "source-map",
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin(getHtmlWebpackPluginOpts()),
      new ExtractTextPlugin('styles-[contenthash].css')
    ]
  }
};

function getHtmlWebpackPluginOpts() {
  const opts = {template: '!!handlebars-loader!src/index.hbs'};
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return opts;
  }
  return Object.assign({}, opts, {filename: './../index.html'})
}