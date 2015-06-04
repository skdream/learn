// grunt 插件 http://www.gruntjs.net/plugins

var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt){

	var pkg = grunt.file.readJSON('package.json');

	var dest = pkg.dest,
			src = pkg.src;

	function getDirect(type){
		return (src + '/' + dest + '/') + (type? type: '');
	}
	

	var destImages = getDirect('images'),
			destCss    = getDirect('css'),
			destJs     = getDirect('js'),
			destHtml   = getDirect();


console.log(src);

	// config
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),

		// 复制代码
		copy:{
			main:{
/*				options:{
					process:function(content, srcpath){
						return content.replace(/[-]/g,'_');
					}
				},*/
				files:[{
					expand:true,
					cwd:src + '/js',
					src:['**/*.min.js'],
					dest:destJs,
					filter:'isFile'
				}]
			},

			cssTarget:{
				files:[{
					expand:true,
					cwd:src + '/css',
					src:['**/*.min.css'],
					dest:destCss,
					filter:'isFile'
				}]
			}


			// htmlTarget:{
			// 	files:[{
			// 		expand:true,
			// 		cwd:pkg.actName +'/images',
			// 		src:['**/*.{png,jpg,gif}'],
			// 		dest:pkg.actName+'/build/images'
			// 	}]
			// }
		},


		// 压缩脚本
		uglify:{
			options:{
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				files:[{
					expand:true,
					cwd:src +'/js',
					src:['**/*.js','!**/*.min.js'],
					dest:destJs
				}]

			}
		},
		// 压缩样式

		cssmin:{
			options:{
				shorthandCompacting:false,
				roundingPrecision:-1
			},
			build:{
				files:[{
					expand:true,
					cwd:src +'/css',
					src:['**/*.css','!**/*.min.css'],
					dest:destCss
					//ext:'.min.css'
				}]
			}
		},

		// 压缩html代码

	  htmlmin: {                                     // Task 
	    dist: {                                      // Target 
	      options: {                                 // Target options 

					// process:function(content, srcpath){
					// 	var staticREG = /.*\/(:.*\.(css$|js$|png$)|[^\.]*$)/;
					// 	return content.replace(/[-]/g,'_');
					// },
	        removeComments: true,
	        collapseWhitespace: true
	       },
	      files: [{
	      	expand:true,
	      	cwd:src,
	      	src:['**/*.html','!**/node_modules','!**/build'],
	      	dest:destHtml
	      }]
	    },
	    dev: {                                       // Another target 
	      files: {
	        'dist/index.html': 'src/index.html',
	        'dist/contact.html': 'src/contact.html'
	      }
	    }
	  },
	  // 压缩图片
	  imagemin:{
	  	build:{
	  		options: { // Target options 
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }],
	        use: [mozjpeg()]
	      },
	  		files:[{
	  			expand:true,
	  			cwd:src +'/images/',
	  			src:['**/*.{png,jpg,gif}'],
	  			dest:destImages
	  		}]
	  	}
	  },
	  // grunt-img 图片压缩

	  img:{
	  	task1:{
	  		src : src +'/images/**/*.{png,jpg,gif}',
	  		dest:destImages
	  	}
	  },
	  //<[^>]+(?:src|href)=\s*["']?([^"]+\.(?:js|css))

	 // replace: {
   //    dist: {
   //      options: {
   //        patterns: [
   //          {
   //            match: '/foo/g',
   //            replacement: 'bar'
   //          }
   //        ]
   //      },
   //      files: [
   //        {expand: true, flatten: true, src: [pkg.actName + '**/*.html'], dest: pkg.actName + '/build/'}
   //      ]
   //    }
   //  },


		// js代码检查
		jshint:{
			files:{
				expand:true,
				cwd:src,
				src:['js/**/*.js','!js/**/*.min.js']
			}
		},


		// less
		less: {
		  development: {

	      files: [{
					expand: true,
					cwd: src,
	        src: 'css/**/*.less',
	        dest: getDirect(),
	        ext: '.css'
	      }]
		  }
/*		  ,production: {
		    options: {
		      paths: ["assets/css"],
		      plugins: [
		        new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
		        new require('less-plugin-clean-css')(cleanCssOptions)
		      ],
		      modifyVars: {
		        imgPath: '"http://mycdn.com/path/to/images"',
		        bgColor: 'red'
		      }
		    },
		    files: {
		      "path/to/result.css": "path/to/source.less"
		    }
		  }*/
		},

		// sass
		sass: {
	    dist: {
	      files: [{
	        expand: true,
	        cwd: src,
	        src: ['**/*.scss'],
	        dest: getDirect(),
	        ext: '.css'
	      }]
	    }
	  },




		// 代码监听
		watch:{
			options: {
        livereload: true,
      },
			all:{
				files:[src+'/js/**/*.js'],
				tasks:['default'],
				options:{
					//interrupt: true,
					spawn:false //If you need to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context
				}
			}
			,
			sass:{
					files:[src + 'css/**/*.{sass,scss}'],
					tasks:['sass'],
					options:{
						livereload:true
					}
			}
			,
			lessTarget:{
					files:[src + '/css/**/*.less'],
					tasks:['less'],
					options:{
						//interrupt: true,
						spawn:true //If you need to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context
					}
			}

		}

	});

	// load plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-img');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-replace');
	

	grunt.registerTask('default',['uglify','cssmin','img','htmlmin','copy']);
	grunt.registerTask('test',['jshint']);

	// 注意！！任务名不能跟配置里面的字段重名，否则会报错，或者不配置别名
	// 直接 grunt watch
	grunt.registerTask('watcher',['watch']);

	grunt.registerTask('minhtml',['htmlmin']);
}