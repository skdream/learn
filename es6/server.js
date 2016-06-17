
const webpack = require('webpack');
const config = require('./webpack.config.js');
const WebpackDevServer = require('webpack-dev-server');

config.plugins.push(new webpack.HotModuleReplacementPlugin());

var app = new WebpackDevServer(webpack(config),{
	publicPath:config.output.publicPath,
	historyApiFallback:true,
	hot:true
});

app.listen(8080,'0.0.0.0',function(err, result){
	console.log('http://localhost:8080');
	if(err){
		console.log(err);
	}
}); 