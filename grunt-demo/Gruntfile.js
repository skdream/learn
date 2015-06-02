// grunt 插件 http://www.gruntjs.net/plugins

var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt){
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
					cwd:'js',
					src:['**/*.min.js'],
					dest:'build/js',
					filter:'isFile'
				}]
			},
			htmlTarget:{
				files:[{
					expand:true,
					cwd:'images',
					src:['**/*.{png,jpg,gif}'],
					dest:'build/images'
				}]
			}
		},


		// 压缩脚本
		uglify:{
			options:{
				banner:'/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build:{
				files:[{
					expand:true,
					cwd:'js',
					src:['**/*.js','!**/*.min.js'],
					dest:'build/js'
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
					cwd:'css',
					src:['**/*.css','!**/*.min.css'],
					dest:'build/css',
					ext:'.min.css'
				}]
			}
		},

		// 压缩html代码

	  htmlmin: {                                     // Task 
	    dist: {                                      // Target 
	      options: {                                 // Target options 
	        removeComments: true,
	        collapseWhitespace: true
	       },
	      files: [{
	      	expand:true,
		      //	cwd:'./',
	      	src:['**/*.html','!node_modules','!build'],
	      	dest:'build'
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
	  		options: {                       // Target options 
	        optimizationLevel: 3,
	        svgoPlugins: [{ removeViewBox: false }],
	        use: [mozjpeg()]
	      },
	  		files:[{
	  			expand:true,
	  			cwd:'images/',
	  			src:['**/*.{png,jpg,gif}'],
	  			dest:'build/images'
	  		}]
	  	}
	  },


		// js代码检查
		jshint:{
			files:{
				src:['js/**/*.js','!js/**/*.min.js']
			}
		},

		// 代码监听
		watch:{
			options: {
        livereload: true,
      },
			all:{
				files:['js/**/*.js'],
				tasks:['default'],
				options:{
					//interrupt: true,
					spawn:false //If you need to dynamically modify your config, the spawn option must be disabled to keep the watch running under the same context
				}
			}
		}

	});

	// load plugin
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');


	

	grunt.registerTask('default',['jshint','uglify','cssmin','copy','imagemin']);

	// 注意！！任务名不能跟配置里面的字段重名，否则会报错，或者不配置别名
	// 直接 grunt watch
	grunt.registerTask('watcher',['watch']);

	grunt.registerTask('minhtml',['htmlmin']);


}