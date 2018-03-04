const path = require('path');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'server.js'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
};
