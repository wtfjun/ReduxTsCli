const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = require('./webpack.common.config');
config = {
    ...config,
    mode: 'development'
}
config.devServer = {
  inline: true,
  hot: true,
  publicPath: '/dist/'
}
config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = config;

