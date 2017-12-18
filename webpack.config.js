const path = require('path');

const config = {
  context: path.resolve(__dirname, 'public/src'),
  entry: {
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
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }]
      }
    ]
  }
};

module.exports = config;