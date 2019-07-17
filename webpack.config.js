const path = require('path');

module.exports ={
  // entry point
  entry: {
    app: './src/index.js'
  },
  //output point
  output: {
    filename: 'linter.js',
    path: path.resolve(__dirname, './build'),
    // for dev-server
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    // show errors in browser
    overlay: true,
    // cors error fixed
    // https://stackoverflow.com/questions/45575713/webpack-dev-server-cors-error-with-credentials
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }
}
