const webpack = require('webpack');

module.exports = {
  entry: [
		'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
	plugins: [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify('development'),
			PLATFORM_ENV: JSON.stringify('web'),
		},
	}),
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
],
};
