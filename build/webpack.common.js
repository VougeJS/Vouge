'use strict'

const Path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  resolve: {
    alias: {
      '@': Path.resolve(__dirname, '../src')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}
