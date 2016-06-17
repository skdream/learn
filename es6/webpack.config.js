const webpack = require('webpack');

var publicPath = "/build/";
module.exports = {
	// 入口
	entry:['webpack-dev-server/client?http://localhost:8080/', 'webpack/hot/dev-server','./src/app.js'],
	// 输出
	output:{
		path: __dirname + publicPath,
		publicPath: publicPath,
		filename:'app.bundle.js',
		devtoolModuleFilenameTemplate: function(info) {
	      return info.resource;
	    }
	},
	module:{
		loaders:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel-loader',
		}],
		  babel: {
		    presets: ['es2015'],
		    plugins: ['transform-runtime']
		  }
	},
	plugins: []

};




if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}
