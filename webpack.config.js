const path = require('path');

const config = {
  context: path.resolve(__dirname, 'public/src'),
  entry: {
    app: './index.js',
    home: './home/index.js'
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};

module.exports = config;