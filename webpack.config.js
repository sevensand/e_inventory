const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports= {
  mode: 'development',
  entry: [
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss', '.sass']
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
           "style-loader", "css-loader", "sass-loader",
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template:  './app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
