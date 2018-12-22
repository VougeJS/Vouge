'use strict'

const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const Path = require('path')
const Webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PathToSandpit = Path.join(__dirname, '../sandpit/')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',

  entry: [
    Path.join(PathToSandpit, 'index.js')
  ],

  devServer: {
    contentBase: '/assets/',
    hot: true,
    watchOptions: {
      poll: true
    },
    watchContentBase: true,
    publicPath: 'http://localhost:8080/',
    /// Fixes:
    /// [WDS] Disconnected!
    /// Invalid Host/Origin header
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    disableHostCheck: true
  },

  output: {
    path: PathToSandpit,
    filename: 'sandpit.js',
    publicPath: 'http://localhost:8080/'
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: Path.join(PathToSandpit, 'index.html'),
      template: Path.join(PathToSandpit, 'index.html'),
      inject: true
    }),
    new CopyWebpackPlugin({
      from: [Path.resolve(__dirname, '..', 'src/assets')],
      to: Path.join(PathToSandpit, 'assets'),
      toType: 'dir'
    }.options)
  ]
})
