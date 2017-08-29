const webpack = require('webpack');

module.exports = {
  entry: {
    frog: './lib'
  },
  output: {
    library: '[name]',
    libraryExport: 'default',
    path: `${__dirname}/dist/`,
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
};
