# mvvm框架之vue.js介绍

标签（空格分隔）： mvvm vuejs javascript

---

## 什么是MVVM?
数据逻辑与展现分离


## MVVM优点？

1. 操作数据即操作DOM
2. 动态模板
3. 低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。
4. 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。
5. 独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
6. 可测试。界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

## Vue.js特点：

1.简洁 

  * HTML模板+JSON数据，再创建一个 Vue 实例，就这么简单。
  
2.数据驱动

* 自动追踪依赖的模板表达式和计算属性。

3.组件化

  * 用解耦、可复用的组件来构造界面。
  
4.轻量

* ~24kb min+gzip，无依赖。

5.快速

* 精确有效的异步批量 DOM 更新。

6.模块友好

* 通过 NPM 或 Bower 安装，无缝融入你的工作流。

## 简单示例

```
<script src="vue.js"></script>

<div id="demo">
  <p>{{message}}</p>
  <input v-model="message">
</div>

<script>
var demo = new Vue({
  el: '#demo',
  data: {
    message: 'Hello Vue.js!'
  }
})
</script>
```
![输出结果][1]

## 大型项目实践

Vue.js 和 webpack，以及把它们串联起来的 vue-loader

### 目录结构

<pre>
.
├── README.md           
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── views          // 各种页面
│   ├── filters.js     // 各种过滤器
│   └── main.js        // Webpack 预编译入口
├── server.js          // webpack-dev-server服务配置
└── webpack.config.js  // Webpack 配置文件
</pre>

### 项目配置文件 package.json

```
{
  "name": "a vue project",
  "version": "1.0.0",
  "description": "vuejs项目示例",
  "main": "index.html",
  "scripts": {
    "dev": "webpack --progress --profile --colors",
    "dist": "NODE_ENV=development gulp",
    "build": "NODE_ENV=production gulp",
    "watch": "webpack-dev-server --hot --inline --progress --colors",
    "server": "node server.js",
    "test": "karma start karma.conf.js --single-run"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/shinygang/Vue-cnodejs"
  },
  "keywords": [
    "cnode",
    "WebApp",
    "Vue",
    "Webpack"
  ],
  "author": "",
  "license": "ISC",
  "engines": {
    "node": "^4.2.1"
  },
  "devDependencies": {
    "babel-core": "^6.1.2",
    "babel-loader": "^6.1.0",
    "babel-plugin-transform-runtime": "^6.1.2",
    "babel-preset-es2015": "^6.1.2",
    "babel-preset-stage-0": "^6.1.2",
    "babel-runtime": "^5.8.0",
    "css-loader": "^0.23.0",
    "cssnext-loader": "^1.0.1",
    "del": "^2.0.2",
    "eventsource-polyfill": "^0.9.6",
    "exports-loader": "^0.6.2",
    "extract-text-webpack-plugin": "^0.8.2",
    "fastclick": "^1.0.6",
    "file-loader": "^0.8.4",
    "function-bind": "^1.0.2",
    "gulp": "^3.9.0",
    "gulp-minify-css": "^1.2.1",
    "gulp-notify": "^2.2.0",
    "gulp-rename": "^1.2.2",
    "gulp-uglify": "^1.4.2",
    "html-loader": "^0.3.0",
    "inject-loader": "^2.0.1",
    "jasmine-core": "^2.4.1",
    "json-loader": "^0.5.4",
    "rimraf": "^2.5.0",
    "karma": "^0.13.15",
    "karma-jasmine": "^0.3.6",
    "karma-phantomjs-launcher": "^1.0.0",
    "karma-spec-reporter": "0.0.24",
    "karma-webpack": "^1.7.0",
    "phantomjs-prebuilt": "^2.1.3",
    "rimraf": "^2.5.0",
    "lodash": "^3.10.1",
    "markdown": "^0.5.0",
    "md5": "^2.0.0",
    "node-sass": "^3.4.1",
    "object-assign": "^4.0.1",
    "sass-loader": "^3.1.1",
    "simplemde": "^1.8.1",
    "style-loader": "^0.13.0",
    "template-html-loader": "0.0.3",
    "url-loader": "^0.5.7",
    "vue-hot-reload-api": "^1.2.0",
    "vue-html-loader": "^1.0.0",
    "vue-loader": "^7.2.0",
    "vue-resource": "^0.1.17",
    "vue-validator": "^1.4.4",
    "webpack": "^1.12.2",
    "webpack-dev-server": "^1.12.0",
    "webpack-zepto": "0.0.1"
  },
  "dependencies": {
    "vue": "^1.0.4",
    "vue-router": "^0.7.5"
  }
}
```

### gulpfile 配置

```
'use strict'

var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webpack = require('webpack'),
    rename = require('gulp-rename'),
    del = require('del');

var config = require('./webpack.config');

/** 
 *  清理生产目录文件
 */
gulp.task('clean', function(cb) {
    del(['./dist/*.js','./dist/*.css','./dist/*.map']).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
        cb();
    });
});


/** 
 *  执行webpack打包
 */
gulp.task('webpack',['clean'], function(cb) {
    webpack(config, cb)
});

/** 
 *  压缩css文件
 */
gulp.task('style',function() {
    gulp.src('./dist/style.css')
    .pipe(rename({suffix:'.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

/** 
 *  压缩js文件
 */
gulp.task('script',function(){
    gulp.src('./dist/*.js')
    // .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['webpack'], function() {
    console.log(process.env.NODE_ENV);
    gulp.start('style','script')
})
```

### Webpack 配置文件 webpack.config.js

```
'use strict'

var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var vue = require("vue-loader");
var isProduction = function() {
    return process.env.NODE_ENV === 'production';
}

//webpack插件
var plugins = [
    //提公用js到common.js文件中
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    //将样式统一发布到style.css中
    new ExtractTextPlugin("style.css", {
        allChunks: true,
        disable: false
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
      $: 'webpack-zepto'
    })
];
var entry = ['./src/main'],
    cdnPrefix = "",
    buildPath = "/dist/",
    publishPath = cdnPrefix + buildPath;
//生产环境js压缩和图片cdn
if (isProduction()) {
    //plugins.push(new webpack.optimize.UglifyJsPlugin());
    cdnPrefix = "";
    publishPath = cdnPrefix;
}
//编译输出路径
module.exports = {
    debug: true,
    entry: entry,
    output: {
        path: __dirname + buildPath,
        filename: 'build.js',
        publicPath: publishPath,
        chunkFilename:"[id].build.js?[chunkhash]"
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", 'css-loader?sourceMap!sass-loader!cssnext-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
                "style-loader", "css-loader?sourceMap!cssnext-loader")
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        },{
            test: /\.(jpg|png|gif)$/,
            loader: "file-loader?name=images/[hash].[ext]"
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'html-loader'
        }]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
        sass: ExtractTextPlugin.extract("css!sass-loader")
    },
    babel: {
        presets: ['es2015', 'stage-0'],//这个是babel6新加的，就是代表需要启动什么样的预设转码，在babel6中，预设了6种，分别是es2015、stage-0、stage-1、stage-2、stage-3、react
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extension: ['', '.js'],
        //别名
        alias: {
            filter: path.join(__dirname, 'src/filters')
        }
    },
    plugins: plugins,
    devtool: '#source-map'
};
```


## 周边工具


* vue-loader：与 Webpack 结合进行组件化开发
* vueify：与 Gulp 结合进行组件化开发
* vue-router：路由
* vue-validator：表单验证库
* vue-resource：网络请求库
* vue-component-complier：与其他预编译器结合
* vue-touch：事件模拟
* meteor-vue：meteor 与 vue 结合开发
* vue-syntax-hightlight：sublime text 的 vue 文件的高亮插件
* vue-typeahead：搜索输入提前查询补全
* vue-i18n：i18n
* vue-devtools：配合 chrome 的开发插件，调试时可用


  [1]: http://img1.tbcdn.cn/L1/461/1/088c2fe6a59cf1babdb83e963e844bc62b96c8c1




## 参考文档

- [Vue + webpack 项目实践](http://jiongks.name/blog/just-vue/)
- [Webpack loader for Vue.js components](https://github.com/vuejs/vue-loader)
- [mvvm学习&vue实践小结](http://www.alloyteam.com/2015/06/mvvm-xue-xi-vue-shi-jian-xiao-jie/)
- [Vue.js：轻量高效的前端组件化方案](http://www.csdn.net/article/1970-01-01/2825439)
- [Vue 组件化开发实践](http://gold.xitu.io/entry/55f77eb460b28e6a6f0f4f86)

- [基于vue.js重写Cnodejs.org社区的webapp](https://github.com/shinygang/Vue-cnodejs)

- [Vue.js 和 Webpack](http://djyde.github.io/2015/08/29/vuejs-and-webpack-1.html)
- [vue-webpack-example](https://github.com/vuejs/vue-webpack-example)


https://github.com/shinygang/Vue-cnodejs

https://github.com/zerqu/qingcheng

http://vuejs.github.io/vue-loader/