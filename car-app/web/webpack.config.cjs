const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.tsx'),
  output: {publicPath: '/', filename: 'app.js'},
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.web.js', '.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-linear-gradient': 'react-native-web-linear-gradient',
    },
  },
  module: {
    rules: [
      {test: /\.m?js$/, resolve: {fullySpecified: false}},
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules\/(?!(?:@react-navigation|react-native-[^/]+|@react-native-community)\/)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: false,
            presets: [['module:@react-native/babel-preset', {disableImportExportTransform: true}]],
          },
        },
      },
      {test: /\.(png|jpe?g|gif|ttf)$/, type: 'asset/resource', generator: {filename: 'assets/[name].[contenthash:8][ext]'},},
    ],
  },
  plugins: [
    // Gesture Handler supports running without its optional Reanimated integration.
    new webpack.IgnorePlugin({resourceRegExp: /^react-native-reanimated$/}),
    new webpack.DefinePlugin({__DEV__: true, 'process.env.NODE_ENV': JSON.stringify('development')}),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'index.html'), filename: 'index.html', inject: false}),
    new HtmlWebpackPlugin({title: 'Qent', filename: 'app.html', templateContent: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><title>Qent</title><style>html,body,#root{height:100%;margin:0}#root{display:flex;flex-direction:column}body{overflow:hidden}</style></head><body><div id="root"></div></body></html>'}),
  ],
  watchOptions: {poll: 1000, ignored: /node_modules/},
  devServer: {
    host: '0.0.0.0', port: 3000, allowedHosts: 'all',
    hot: true, historyApiFallback: true,
    client: {webSocketURL: 'auto://0.0.0.0:0/ws'},
  },
};
