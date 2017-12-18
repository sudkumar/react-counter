const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: ["common", "vendors", "manifest"],
  }),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "./docs/src/index.html"),
    hash: false,
    filename: "index.html",
    inject: "body",
    minify: {
      collapseWhitespace: true,
      removeComments: true
    },
  }),
  new InlineChunkWebpackPlugin({
      inlineChunks: ['manifest']
  }),
  new UglifyJsPlugin({
    test: /\.js($|\?)/i,
    sourceMap: true,
    uglifyOptions: {
        compress: true
    }
  })
]

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['webpack/hot/dev-server', './docs/src/main.js'],
    vendors: ["react", "react-dom"]
  },

  output: {
    publicPath: "./",
    path: path.join(__dirname, "./docs"),
    filename: `js/[name].[hash].js`,
    chunkFilename: "js/[chunkhash].js"
  },

  module: {
    rules: [{
      test: /\.js/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader"
      }]
    }]
  },

  resolve: {
    extensions: ['.js']
  },

  plugins,

  devServer: {
    contentBase: path.resolve(__dirname, "docs")
  }

};
